/**
 * Created by ???? on 2015/9/18.
 */
var learningDirectives = angular.module("CourseRescourseDirectives", ["BaseServices", 'FrameworkServices', 'LearningServices', 'ProjectServices']);

learningDirectives.directive("courseRes", ["$q", "$stateParams", "LayoutService", "LearningService", "ProjectService", "PermissionService", "CurrentUser", "CurrentProject", "Base",
    function ($q, $stateParams, LayoutService, LearningService, ProjectService, PermissionService, CurrentUser, CurrentProject, Base) {
        return {
            restrict: 'E',
            scope: {},
            replace: true,
            templateUrl: function () {
                return LayoutService.getFunctionModuleTmplAddress('course-res');
            },
            link: function (scope, element, attr) {
                //判断是否国培评审项目
                scope.isGpps = Base.getProjectId().substr(0,4).toLocaleLowerCase()=="gpps";
                //????? ?????????
                scope.comboLoading = true;

                //???????????????????
                var allPackage = PermissionService.isAllow('learning', 'all-package-view');
                var allCoursePackage = PermissionService.isAllow('learning', 'all-course-package-view');
                var isStudy = false; //PermissionService.isAllow('learning', 'study');

                scope.isStudy = isStudy;

                var courses = {};
                if (allCoursePackage) {
                    scope.subjectCodes = CurrentProject.project.subjects;
                    scope.currentSubjectId = $stateParams.subjectId || scope.subjectCodes[0].subjectCode;
                    courses = ProjectService.queryCourseGroupAndCourseByCourse({courseId: scope.currentSubjectId});
                }
                else if (allPackage) {
                    courses = ProjectService.queryCourseGroupAndCourseByCourse({courseId: CurrentUser.subjectCode});
                } else {
                    courses = ProjectService.queryCourseGroupAndCourseByCourse({courseId: CurrentUser.subjectCode});
                }

                //???????????
                var systemDateTime = ProjectService.getSystemDateTime();

                $q.all([courses, systemDateTime]).then(function (results) {

                    //?????
                    var systemTime = results[1].time;

                    if (isStudy) {
                        //??????????
                        ProjectService.setCoursesOpenStatus(results[0][0], systemTime);
                    }

                    scope.courses = results[0];
                    scope.currentPackageId = results[0][0].id;
                    //????????????
                    scope.comboLoading = false;
                }, function (error) {
                    var data = error.data;
                    //?????????
                    scope.comboErrorMessage = data.message;

                    //??????????
                    scope.comboLoading = false;
                });

                scope.setCurrentPackage = function (id) {
                    scope.currentPackageId = id;
                };
            }
        }
    }]);

learningDirectives.directive("courseResSection", ["$timeout","$stateParams", "$q", "LayoutService", "PermissionService", "LearningService", "CurrentUser", "ProjectService", "Base",
    function ($timeout,$stateParams, $q, LayoutService, PermissionService, LearningService, CurrentUser, ProjectService, Base) {
        return {
            restrict: 'E',
            scope: {},
            replace: true,
            templateUrl: function () {
                return LayoutService.getFunctionModuleTmplAddress('course-res-section');
            },
            link: function (scope, element, attr) {
                //???????????
                var isStudy =  false; //PermissionService.isAllow('learning', 'study');

                //????????????
                scope.sectionLoading = true;

                var courses = LearningService.getCourseSectionAndGroup({courseId: $stateParams.courseId});

                //?????????????scope
                scope.isStudy = isStudy;
                scope.showTitle = PermissionService.isAllow('learning', 'study');

                //???????
                var func = [courses];

                //????????????
                if (isStudy) {
                    var learningRecod = LearningService.queryLearningRecodeByCourse({courseId: $stateParams.courseId});

                    //????????????????
                    func.push(learningRecod);
                }

                //???????
                $q.all(func).then(function (results) {
                    // :courseId/:sectionId/groupId/:rescoureId
                    scope.course = results[0] ;
                    var learningRecord = results[1] || {};
                    if(angular.isUndefined(learningRecord.s_index)){
                        learningRecord = {s_index : 0};
                        //learningRecord.s_index = 0;
                    }

                    //??????sectionId
                    if (!$stateParams.sectionId) {
                        $stateParams.sectionId = scope.course.section[0].id;
                    }


                    //?????????
                    scope.sectionLoading = false;

                    if ($stateParams.sectionId) {

                        //???????
                        scope.resourceLoading = true;

                        //???sectionID
                        scope.currentSectionId = $stateParams.sectionId;

                        var r = LearningService.queryCourseGroupResource({sectionId: $stateParams.sectionId});

                        $q.when(r).then(function (resource) {

                            // console.log(scope.course);
                            //?????????????????
                            LearningService.createSectionResourceReference(scope.course.section, resource, $stateParams.sectionId,'courseres');

                            //???????????? ??????????
                            if (isStudy) {
                                var pass = LearningService.learningPass({courseId : $stateParams.courseId,sectionCount : learningRecord.s_index+1,groupCount :0,rescoureCount : 0});

                                $q.when(pass).then(function(pass){
                                    learningRecord.pass = pass;
                                    //?????????
                                    LearningService.LearningProgress(scope.course, learningRecord);

                                    //???????????
                                    function check(){
                                        function learning(){
                                            var learningStatus =  LearningService.checkLearningPace(scope.course);
                                            if(learningStatus){
                                                //????????
                                                LearningService.setLearningProgress(scope.course,learningStatus.resouceId,learningStatus.status);
                                            }else{
                                                //????????????
                                                LearningService.openNextResource(scope.course);
                                            }
                                        }

                                        function timer(){
                                            //??????? ????
                                            if(window.location.hash.indexOf('training/learning') > -1){
                                                $timeout(function(){
                                                    learning();
                                                    timer();
                                                },10000);
                                            }
                                        }

                                        learning();

                                        timer();
                                    }
                                    //???????
                                    check();
                                });

                            }

                            //??????????
                            scope.resourceLoading = false;


                        }, function (error) {
                            var data = error.data;
                            //?????????
                            scope.resourceErrorMessage = data.message;

                            //??????????
                            scope.resourceLoading = false;
                        });
                    }

                }, function (error) {
                    var data = error.data;
                    //?????????
                    scope.sectionErrorMessage = data.message;

                    //??????????
                    scope.sectionLoading = false;
                });

                //?????????
                scope.setFinish = function (res) {
                    //res.finish = 2;
                };

            }
        }
    }]);

learningDirectives.directive("courseResourceText", ["$stateParams", "$q", "LayoutService", "LearningService", "ProjectService", "Base",
    function ($stateParams, $q, LayoutService, LearningService, ProjectService, Base) {
        return {
            restrict: 'E',
            scope: {},
            replace: true,
            templateUrl: function () {
                return LayoutService.getFunctionModuleTmplAddress('learning-text-res');
            },
            link: function (scope, element, attr) {

                //??????????
                scope.loading = true;

                var resource = LearningService.getCourseResourceByType(
                    {
                        resourceId: $stateParams.resourceId, sectionIndex: $stateParams.sectionIndex,
                        activityGroupIndex: $stateParams.activityGroupIndex, activityIndex: $stateParams.activityIndex
                    });
                $q.when(resource).then(function (activity) {
                    //??????????
                    scope.loading = false;

                    scope.activity = activity;
                    //???????
                    // LearningService.recordLearningPace(activity);
                }, function (error) {
                    var data = error.data;
                    //?????????
                    scope.errorMessage = data.message;

                    //??????????
                    scope.loading = false;
                });
            }
        }
    }]);

learningDirectives.directive("courseResourceLink", ["$stateParams", "$q", "LayoutService", "LearningService", "ProjectService", "Base",
    function ($stateParams, $q, LayoutService, LearningService, ProjectService, Base) {
        return {
            restrict: 'E',
            scope: {},
            replace: true,
            templateUrl: function () {
                return LayoutService.getFunctionModuleTmplAddress('learning-link-res');
            },
            link: function (scope, element, attr) {

                //??????????
                scope.loading = true;

                var resource = LearningService.getCourseResourceByType(
                    {
                        resourceId: $stateParams.resourceId, sectionIndex: $stateParams.sectionIndex,
                        activityGroupIndex: $stateParams.activityGroupIndex, activityIndex: $stateParams.activityIndex
                    });
                $q.when(resource).then(function (activity) {
                    //??????????
                    scope.loading = false;

                    scope.activity = activity;

                    //???????
                    //LearningService.recordLearningPace(activity);
                    //??????
                    window.location.href = activity.refUrl;
                }, function (error) {
                    var data = error.data;
                    //?????????
                    scope.errorMessage = data.message;

                    //??????????
                    scope.loading = false;
                });
            }
        }
    }]);

learningDirectives.directive("courseResourceHomework", ["$stateParams", "$q", "LayoutService", "LearningService", "ProjectService", "Base",
    function ($stateParams, $q, LayoutService, LearningService, ProjectService, Base) {
        return {
            restrict: 'E',
            scope: {},
            replace: true,
            templateUrl: function () {
                return LayoutService.getFunctionModuleTmplAddress('learning-homework-res');
            },
            link: function (scope, element, attr) {

                //??????????
                scope.loading = true;

                var resource = LearningService.getCourseResourceByType(
                    {
                        resourceId: $stateParams.resourceId, sectionIndex: $stateParams.sectionIndex,
                        activityGroupIndex: $stateParams.activityGroupIndex, activityIndex: $stateParams.activityIndex
                    });
                $q.when(resource).then(function (activity) {
                    //??????????
                    scope.loading = false;

                    scope.activity = activity;
                    //???????
                    // LearningService.recordLearningPace(activity);
                }, function (error) {
                    var data = error.data;
                    //?????????
                    scope.errorMessage = data.message;

                    //??????????
                    scope.loading = false;
                });
            }
        }
    }]);

learningDirectives.directive("courseResourceDiscussion", ["$stateParams", "$q", "LayoutService", "LearningService", "ProjectService", "Base",
    function ($stateParams, $q, LayoutService, LearningService, ProjectService, Base) {
        return {
            restrict: 'E',
            scope: {},
            replace: true,
            templateUrl: function () {
                return LayoutService.getFunctionModuleTmplAddress('learning-discussion-res');
            },
            link: function (scope, element, attr) {

                //??????????
                scope.loading = true;

                var resource = LearningService.getCourseResourceByType(
                    {
                        resourceId: $stateParams.resourceId, sectionIndex: $stateParams.sectionIndex,
                        activityGroupIndex: $stateParams.activityGroupIndex, activityIndex: $stateParams.activityIndex
                    });
                $q.when(resource).then(function (activity) {
                    //??????????
                    scope.loading = false;

                    scope.activity = activity;
                    //???????
                    // LearningService.recordLearningPace(activity);
                }, function (error) {
                    var data = error.data;
                    //?????????
                    scope.errorMessage = data.message;

                    //??????????
                    scope.loading = false;
                });
            }
        }
    }]);

learningDirectives.directive("courseResourceTest", ["$stateParams", "$q", "LayoutService", "LearningService", "ProjectService", "Base", "CurrentUser", "CurrentProject","PermissionService",
    function ($stateParams, $q, LayoutService, LearningService, ProjectService, Base, CurrentUser, CurrentProject,PermissionService) {
        return {
            restrict: 'E',
            scope: {},
            replace: true,
            templateUrl: function () {
                return LayoutService.getFunctionModuleTmplAddress('course-res-test-res');
            },
            link: function (scope, element, attr) {

                scope.loading = true;
                scope.noSubmit = true;
                scope.isSubmit = false;

                //???????
                scope.isSubmit = PermissionService.isAllow("courseres","testSubmit");

                var resource = LearningService.getCourseResourceByType(
                    {
                        resourceId: $stateParams.resourceId, sectionIndex: $stateParams.sectionIndex,
                        activityGroupIndex: $stateParams.activityGroupIndex, activityIndex: $stateParams.activityIndex
                    });
                $q.when(resource).then(function (activity) {

                    scope.activity = activity;

                    if (activity && activity.refUrl.length > 0) {
                        var test = LearningService.getResourceStdTest({id: activity.refUrl});
                        $q.when(test).then(function (mTest) {
                            scope.loading = false;
                            scope.test = mTest;

                            //???????
                            // LearningService.recordLearningPace(scope.activity,true,false);
                        }, function (error) {
                            var data = error.data;
                            //?????????
                            scope.errorMessage = data.message;

                            //??????????
                            scope.loading = false;
                        });
                    }
                }, function (error) {
                    var data = error.data;
                    //?????????
                    scope.errorMessage = data.message;

                    //??????????
                    scope.loading = false;
                });

                function verification() {


                    var msg = {result: true};

                    var result = {};
                    var actStdTestAnswers = [];
                    var score = 0;
                    var optionContent = [];
                    for (var questionIndex = 0; questionIndex < scope.test.actStdTestProlems.length; questionIndex++) {
                        var question = scope.test.actStdTestProlems[questionIndex];
                        question.error = null;
                        var checkedCount = 0;
                        var answer = [];
                        for (var i = 0; i < question.actStdTestOpts.length; i++) {
                            var options = [];
                            var option = question.actStdTestOpts[i];

                            if (!question.multiple) {
                                if (typeof(question.checked) != 'undefined' && question.checked == option.title) {
                                    option.checked = true;
                                } else {
                                    option.checked = false;
                                }
                            }


                            if (option.checked) {
                                checkedCount++;
                                answer.push(option.title);
                            }
                        }
                        if (checkedCount < question.mincount) {
                            question.error = Base.stringFormat("最少选择{0}项。", question.mincount);
                            msg.result = false;
                            msg.error = Base.stringFormat("问题{0}:{1} 最少选择{2}项。", questionIndex + 1, question.title, question.mincount);
                            // alert();
                            return msg;
                        }
                        if (checkedCount > question.maxcount) {
                            question.error = Base.stringFormat("最多选择{0}项。", question.maxcount);
                            msg.result = false;
                            msg.error = Base.stringFormat("问题{0}:{1} 最多选择{2}项。", questionIndex + 1, question.title, question.maxcount);
                            return msg;
                        }
                        var isCorrect = answer.join('') == question.correctanswer;
                        if (isCorrect) {
                            score += parseInt(question.score);
                        }
                        actStdTestAnswers.push({
                            correctanswer: question.correctanswer,
                            flag: isCorrect,
                            score: question.score,
                            sortorder: questionIndex
                        });

                        options.push(option.id);
                        options.push(answer.join(''));
                        optionContent.push(options.join("^"));
                        result.optionContent = optionContent.join("|");
                    }
                    result.actStdTestAnswers = actStdTestAnswers;
                    result.score = score;


                    msg.data = result;

                    return msg;
                }

                scope.submiting = function () {

                    scope.submitLoading = true;
                    scope.resultErrorMessage = null;
                    scope.score = null;

                    var result = verification();

                    //????????
                    if (result && !result.result && !result.data) {
                        scope.resultErrorMessage = result.error;
                        scope.submitLoading = false;
                        return false;
                    }
                    result = result.data;

                    result.authorId = CurrentUser.id;
                    result.courseId = $stateParams.resourceId;
                    result.mainId = scope.activity.refUrl;
                    result.consumerId = CurrentProject.project.code;
                    // console.log(scope.activity.id);

                    angular.forEach(scope.test.actStdTestProlems, function (question, index) {
                        question.result = result.actStdTestAnswers[index];
                        question.result.flag = question.result.flag ? 2 : 1;
                    });

                    var urlParam = {
                        s_index: $stateParams.sectionIndex,
                        g_index: $stateParams.activityGroupIndex,
                        a_index: $stateParams.activityIndex
                    };

                    var saveResult = LearningService.saveResourceStdTest(urlParam, result);

                    $q.when(saveResult)
                        .then(function (succesModel) {
                            scope.submitLoading = false;
                            scope.score = result.score;
                            scope.isShowScope = true;
                            //???????
                            // LearningService.recordLearningPace(scope.activity,true,true);
                            // console.log(result);
                        }, function (error) {
                            var data = error.data;
                            //?????????
                            scope.resultErrorMessage = data.message;

                            //??????????
                            scope.submitLoading = false;
                        });

                }
            }
        }
    }]);

learningDirectives.directive("courseResourceSurvey", ["$stateParams", "$q", "LayoutService", "LearningService", "ProjectService", "Base", "CurrentUser", 'CurrentProject',
    function ($stateParams, $q, LayoutService, LearningService, ProjectService, Base, CurrentUser, CurrentProject) {
        return {
            restrict: 'E',
            scope: {},
            replace: true,
            templateUrl: function () {
                return LayoutService.getFunctionModuleTmplAddress('course-res-survey-res');
            },
            link: function (scope, element, attr) {

                scope.loading = true;
                scope.noSubmit = true;

                var resource = LearningService.getCourseResourceByType(
                    {
                        resourceId: $stateParams.resourceId, sectionIndex: $stateParams.sectionIndex,
                        activityGroupIndex: $stateParams.activityGroupIndex, activityIndex: $stateParams.activityIndex
                    });

                $q.when(resource).then(function (activity) {
                    scope.activity = activity;

                    if (activity && activity.refUrl.length > 0) {
                        var survey = LearningService.getResourceSurvey({id: activity.refUrl});
                        $q.when(survey)
                            .then(function (survey) {
                                scope.loading = false;
                                scope.survey = survey;
                                //???????
                                //LearningService.recordLearningPace(scope.activity,true,true);
                            }, function (error) {
                                var data = error.data;
                                //?????????
                                scope.errorMessage = data.message;

                                //??????????
                                scope.loading = false;
                            });
                    }
                });

                function verification() {

                    var msg = {result: true};

                    var result = {};
                    // var actStdTestAnswers = [];
                    var score = 0;
                    var optionContent = [];
                    for (var questionIndex = 0; questionIndex < scope.survey.actSurveyProlems.length; questionIndex++) {
                        var question = scope.survey.actSurveyProlems[questionIndex];
                        question.error = null;
                        var checkedCount = 0;
                        var answer = [];
                        for (var i = 0; i < question.actSurveyOpts.length; i++) {
                            var options = [];


                            var option = question.actSurveyOpts[i];
                            if (!question.multiple) {
                                if (typeof(question.checked) != 'undefined' && question.checked == option.title) {
                                    option.checked = true;
                                } else {
                                    option.checked = false;
                                }
                            }
                            if (option.checked) {
                                checkedCount++;
                                answer.push(option.title);
                            }
                        }
                        if (checkedCount < question.mincount) {
                            question.error = Base.stringFormat("???????{0}??", question.mincount);
                            msg.result = false;
                            msg.error = Base.stringFormat("????{0}:{1} ???????{2}??", questionIndex + 1, question.title, question.mincount);
                            // alert();
                            return msg;
                        }
                        if (checkedCount > question.maxcount) {
                            question.error = Base.stringFormat("??????{0}??", question.maxcount);
                            msg.result = false;
                            msg.error = Base.stringFormat("????{0}:{1} ??????{2}??", questionIndex + 1, question.title, question.maxcount);
                            return msg;
                        }
                        //var isCorrect = answer.join('') == question.correctanswer;
                        //if (isCorrect) {
                        //    score += parseInt(question.score);
                        //}
                        //actStdTestAnswers.push({
                        //    correctanswer: question.correctanswer,
                        //    flag: isCorrect,
                        //    score: question.score,
                        //    sortorder: questionIndex
                        //});

                        options.push(option.id);
                        options.push(answer.join(''));
                        optionContent.push(options.join("^"));
                        result.optionContent = optionContent.join("|");
                    }
                    //result.actStdTestAnswers = actStdTestAnswers;
                    //result.score = score;


                    msg.data = result;

                    return msg;
                }

                scope.submiting = function () {

                    scope.submitLoading = true;
                    scope.resultErrorMessage = null;

                    var result = verification();

                    //????????
                    if (result && !result.result && !result.data) {
                        scope.resultErrorMessage = result.error;
                        scope.submitLoading = false;
                        return false;
                    }
                    result = result.data;

                    result.id = scope.activity.id;

                    result.authorId = CurrentUser.id;
                    result.courseId = $stateParams.resourceId;
                    result.mainId = scope.activity.refUrl;
                    result.consumerId = CurrentProject.project.code;

                    var urlParam = {
                        s_index: $stateParams.sectionIndex,
                        g_index: $stateParams.activityGroupIndex,
                        a_index: $stateParams.activityIndex
                    };


                    var submitSurvey = LearningService.saveResourceSurvey(urlParam, result);

                    $q.when(submitSurvey)
                        .then(function (success) {

                            //??????????
                            scope.submitLoading = false;
                            scope.score = result.score;
                            //???????
                            // LearningService.recordLearningPace(scope.activity,true,true);
                            //console.log(success);

                        }, function (error) {
                            var data = error.data;
                            //?????????
                            scope.resultErrorMessage = data.message;

                            //??????????
                            scope.submitLoading = false;
                        });

                }
            }
        }
    }]);

learningDirectives.directive("courseResourceVideo", ["$stateParams", "$q", "LayoutService", "LearningService", "ProjectService", "Base",
    function ($stateParams, $q, LayoutService, LearningService, ProjectService, Base) {
        return {
            restrict: 'E',
            scope: {},
            replace: true,
            templateUrl: function () {

                if (!!window.ActiveXObject || "ActiveXObject" in window) {
                    //IE???????
                    return LayoutService.getFunctionModuleTmplAddress('learning-ie-video-res');
                } else if (navigator.userAgent.indexOf('Firefox') >= 0) {
                    //????????
                    return LayoutService.getFunctionModuleTmplAddress('learning-ff-video-res');
                } else {
                    //????
                    return LayoutService.getFunctionModuleTmplAddress('learning-other-video-res');
                }
            },
            link: function (scope, element, attr) {
                scope.resorceNum = 0;//????????

                //?????????
                scope.loading = true;

                var resource = LearningService.getCourseResourceByType(
                    {
                        resourceId: $stateParams.resourceId, sectionIndex: $stateParams.sectionIndex,
                        activityGroupIndex: $stateParams.activityGroupIndex, activityIndex: $stateParams.activityIndex
                    });
                $q.when(resource).then(function (activity) {
                    //???????
                    scope.loading = false;
                    scope.activity = activity;
                    var getSWF = function ( swfID ) {
                        if (window.document[ swfID ]) {
                            return window.document[ swfID ];
                        } else if (navigator.appName.indexOf("Microsoft") == -1) {
                            if (document.embeds && document.embeds[ swfID ]) {
                                return document.embeds[ swfID ];
                            }
                        } else {
                            return document.getElementById( swfID );
                        }
                    };
                    //???????
                    // LearningService.recordLearningPace(activity);
                    var i = 0;
                    var postTime = 5;
                    var ccplay = undefined;
                    /*
                     scope.activity.completionCriteria = {duration:5000};
                     scope.activity.duration = 280;
                     scope.activity.learning = true;
                     scope.activity.prolems = [
                     {time:300,title:"测试1",type:1,corrects:["A"],options:[
                     {title:"A", content:"选项1"},
                     {title:"B", content:"选项2"},
                     {title:"C", content:"选项3"}
                     ]},
                     {time:400,title:"测试2",type:2,corrects:["A","B"],options:[
                     {title:"A", content:"选项1"},
                     {title:"B", content:"选项2"},
                     {title:"C", content:"选项3"}
                     ]}
                     ];
                     */

                    if(scope.activity.prolems)
                        scope.activity.prolems = scope.activity.prolems.reverse();
                    scope.prolemSubmit= function(){
                        switch(scope.currentProlem.type){
                            case 1:
                                if(scope.currentProlem.value!=scope.currentProlem.corrects[0]){
                                    alert("回答错误!");
                                    return ;
                                }
                                break;
                            case 2:
                                var valueSize = 0;
                                angular.forEach(scope.currentProlem.options,function(data,index,array){
                                    if(scope.currentProlem.value[data.title]){
                                        valueSize++;
                                    }
                                })
                                if(valueSize!=scope.currentProlem.corrects.length){
                                    valueSize=-1;
                                }else{
                                    angular.forEach(scope.currentProlem.corrects,function(data,index,array){
                                        if(!scope.currentProlem.value[data]){
                                            valueSize = -1;
                                        }
                                    })
                                }
                                if(valueSize<0){
                                    alert("回答错误!");
                                    return ;
                                }
                                break;
                            case 3:
                                if(scope.currentProlem.value!=scope.currentProlem.corrects[0]){
                                    alert("回答错误!");
                                    return ;
                                }
                                break;
                        }
                        $("#prolem").modal("hide");
                    }
                    window.duration = function(){
                        //$("#survey").html(i);
                        var act = scope.activity;
                        if(scope.ccId)
                            if(act.learning){
                                if(scope.activity.prolems && scope.activity.prolems.length>0){
                                    while(!scope.currentProlem){
                                        if(scope.activity.prolems.length==0)
                                            break;
                                        var prolem = scope.activity.prolems.pop();
                                        if(prolem.time>scope.activity.duration){
                                            scope.currentProlem = prolem;
                                            if(scope.currentProlem.type==2){
                                                scope.currentProlem.value = {};
                                            }
                                        }
                                    }
                                }
                                if(scope.currentProlem){
                                    if(ccplay.getPosition()>scope.currentProlem.time){
                                        ccplay.pause();
                                        scope.$digest();
                                        $("#prolem").modal("show");
                                    }
                                }
                                if(ccplay.getPosition()>scope.activity.duration){
                                    scope.activity.duration = parseInt(ccplay.getPosition());
                                }
                                setTimeout("duration()",postTime*1000);
                            }
                    }
                    window.on_player_stop = function(){
                        var url = Base.stringFormat("{0}/learning/uact/{1}/{2}/{3}/{4}/{5}", Base.dataApiUri.learning,$stateParams.resourceId,$stateParams.sectionIndex,$stateParams.activityGroupIndex,$stateParams.activityIndex,scope.activity.completionCriteria.duration);
                        $.post(url,{},function(data){
                            alert('播放完成');
                        });
                    }
                    window.on_player_seek = function(from, to){
                        if(scope.activity.duration<to){
                            ccplay.seek(from);
                            return false;
                        }
                    }
                    window.on_play_start = function (){
                        if(scope.activity.duration>0)
                            ccplay.seek(scope.activity.duration);
                        setTimeout("duration()",postTime*1000);
                    }

                    var vid = activity.p2pId.split("||");
                    $.each(vid, function (i, d) {
                        var ds = d.split("::");
                        if (ds.length == 1) {//????
                            scope.hasP2p = openP2P && true;
                            scope.p2pId = ds[0];
                        } else {//cc???
                            if (ds[0] == "CC") {
                                scope.hasCC = openCC && true;
                                scope.ccId = ds[1];
                            } else if (ds[0] == "LETV") {
                                scope.hasLetv = openLETV && true;
                                var uvu = ds[1].split("--");
                                scope.letvUU = uvu[0];
                                scope.letvVU = uvu[1];
                            }
                        }
                    });
                    if(scope.activity.learning)
                        window.on_cc_player_init = function (vid, objectId) {
                            ccplay = getSWF(objectId);
                            ccplay.setConfig({
                                on_player_stop:"on_player_stop",
                                on_player_seek:"on_player_seek",
                                on_player_start:"on_play_start",
                                rightmenu_enable:0
                            });

                        }

                    $("#prolem").on('hide.bs.modal',function(){
                        var url = Base.stringFormat("{0}/learning/uact/{1}/{2}/{3}/{4}/{5}", Base.dataApiUri.learning,$stateParams.resourceId,$stateParams.sectionIndex,$stateParams.activityGroupIndex,$stateParams.activityIndex,scope.currentProlem.time);
                        $.post(url,{},function(data){
                            scope.currentProlem = undefined;
                            ccplay.resume();
                        });
                    });

                    if (scope.hasP2p) {
                        scope.resorceNum += 1;
                    }
                    if (scope.hasCC) {
                        scope.resorceNum += 1;
                    }
                    if (scope.hasLetv) {
                        scope.resorceNum += 1;
                    }

                    //p2p
                    scope.playP2p = function () {
                        /*$("#ccflashcontent").html("");
                         $("#letvflashcontent").html("");
                         scope.showCC = false;
                         scope.showP2p = true;
                         scope.showLetv = false;
                         $("#p2pLocal").html("<img id=\"videoControl\" style=\"display: none\" src=\"http://127.0.0.1:18582/images/logo.gif\">");

                         $("#videoControl").load(function () {
                         var fileName = "/videos/" + scope.p2pId + ".flv";
                         $.ajax({
                         type: "get",
                         async: false,
                         url: "http://127.0.0.1:18582/state.json?file=" + fileName,
                         dataType: "jsonp",
                         jsonp: "callback",
                         jsonpCallback: "serverState",
                         success: function (json) {
                         if (json.state == 0) {
                         PlayP2P_Local();
                         } else {
                         PlayP2P_Server(scope.p2pId);
                         }
                         },
                         error: function () {
                         PlayP2P_Server(scope.p2pId);
                         }
                         }
                         );
                         }).error(function () {
                         PlayP2P_Server(scope.p2pId);
                         });*/
                    };

                    //cc
                    scope.playCC = function () {
                        $("#ccflashcontent").html("");
                        $("#letvflashcontent").html("");
                        scope.showCC = true;
                        scope.showP2p = false;
                        scope.showLetv = false;
                        $("#ccflashcontent").html('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="960" height="600" id="cc_' + scope.ccId + '">'
                            + '<param name="movie" value="http://p.bokecc.com/flash/single/1258A40FD2666E07_' + scope.ccId + '_false_D3DC3A3A0828EC6B_1/player.swf"/>'
                            + '<param name="allowFullScreen" value="true"/>'
                            + '<param name="allowScriptAccess" value="always"/>'
                            + '<param value="transparent" name="wmode"/>'
                            + '<embed src="http://p.bokecc.com/flash/single/1258A40FD2666E07_' + scope.ccId + '_false_D3DC3A3A0828EC6B_1/player.swf" width="960" height="600" name="cc_' + scope.ccId + '" allowFullScreen="true" wmode="transparent" allowScriptAccess="always" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash"/></object>');
                    };

                    //Letv
                    scope.playLetv = function () {
                        /* $("#ccflashcontent").html("");
                         $("#letvflashcontent").html("");
                         scope.showCC = false;
                         scope.showLetv = true;
                         scope.showP2p = false;
                         $("#letvflashcontent").html('<embed src="http://yuntv.letv.com/bcloud.swf" allowFullScreen="true" quality="high"  width="960" height="600" align="middle" allowScriptAccess="always" flashvars="uu=' + scope.letvUU + '&vu=' + scope.letvVU + '&auto_play=1&gpcflag=1&width=960&height=600" type="application/x-shockwave-flash"></embed>');
                         */                    };

                    //????
                    if (scope.hasCC) {
                        scope.showCC = true;//??????????????div??????
                        scope.showP2p = false;
                        scope.showLetv = false;
                        var runItal = setInterval(function () {
                            if ($("#ccflashcontent").length == 1) {
                                scope.playCC();
                                clearInterval(runItal);
                            }
                        }, 300);
                    } else if (scope.hasLetv) {
                        scope.showCC = false;
                        scope.showP2p = false;
                        scope.showLetv = true;//??????????????div??????
                        var runItal = setInterval(function () {
                            if ($("#letvflashcontent").length == 1) {
                                scope.playLetv();
                                clearInterval(runItal);
                            }
                        }, 300);
                    } else {
                        scope.playP2p();
                    }
                }, function (error) {
                    var data = error.data;
                    //?????????
                    scope.errorMessage = data.message;

                    //??????????
                    scope.loading = false;
                });

            }
        };

        function PlayP2P_Server(id) {
            if (!!window.ActiveXObject || "ActiveXObject" in window) {
                //IE???????
                PlayP2P_IE_Server(id);
            } else if (navigator.userAgent.indexOf('Firefox') >= 0) {
                //????????
                PlayP2PFF_FF_Server(id);
            } else {
                //????
                return LayoutService.getFunctionModuleTmplAddress('learning-other-video');
            }
        }


        function PlayP2P_Local(id) {
            //????P2P????
            //var id = '53a39f480008741aa8ad95cf7f0828e9';
            var id = id; //p2p?????GUID
            create_cdstm_p2p_flash_player("flashcontent", 960, 600, "http://127.0.0.1:18582/videos/" + id + ".flv", "", "");
        }

        function PlayP2P_IE_Server(id) {
            //????P2P????
            var id = id; //p2p?????GUID
            FlV_PPS.SimpleSelectByURL("forcetv://stream/" + id + "?tip=fccs.qlteacher.com:9900&ptl=http&type=flv");
            create_cdstm_p2p_flash_player("flashcontent", 960, 600, "http://127.0.0.1:9906/" + id + ".flv", "", "");
        }

        function PlayP2PFF_FF_Server(id) {
            //????P2P????
            var id = id; //p2p?????GUID
            // console.log(document.getElementById("flvplayer"));
            document.getElementById("flvplayer").SimpleSelectByURL("forcetv://stream/" + id + "?tip=fccs.qlteacher.com:9900&ptl=http&type=flv");
            create_cdstm_p2p_flash_player("flashcontent", 960, 600, "http://127.0.0.1:9906/" + id + ".flv", "", "");
        }

        /*
         ????????DIV????,??,??.
         ??????,   ?????????,???????????,?????P2P,?????P2P???
         related_url ,????????,??????????????????????
         copy_url	,????????,????????????,??????copy_url
         */
        function create_cdstm_p2p_flash_player(obj_div, width, height, play_url, related_url, copy_url) {
            var flashvars = {};
            flashvars.filevalue = play_url;
            flashvars.getrelatedvalue = encodeURIComponent(related_url);
            flashvars.copyvalue = encodeURIComponent(copy_url);
            flashvars.clickrelatedvalue = "";
            // flashvars.logo = "";  2012-05-07 zhangfuzhu
            flashvars.start_by_time = 0;

            //alert( play_url );

            var swfVersionStr = "10.0.0";
            var xiSwfUrlStr = "/app/lib/flv0826/playerProductInstall.swf";

            var params = {};
            params.quality = "high";
            params.bgcolor = "#ffffff";
            params.allowscriptaccess = "sameDomain";
            params.allowfullscreen = "true";
            params.wmode = "window";

            var attributes = {};
            attributes.id = "MyCustomPlayer";
            attributes.name = "MyCustomPlayer";
            attributes.align = "middle";
            swfobject.embedSWF("/app/lib/flv0826/MyCustomPlayer.swf", obj_div, width, height, swfVersionStr, xiSwfUrlStr, flashvars, params, attributes);
            swfobject.createCSS(obj_div, "display:block;text-align:left;");
        }

    }]);