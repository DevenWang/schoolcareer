function allEr() {
    $("#table").bootstrapTable('destroy');
    $("#table").bootstrapTable({ // 对应table标签的id
        method: "post",
        url: "../allRecruitment", // 获取表格数据的url
        cache: false, // 设置为 false 禁用 AJAX 数据缓存， 默认为true
        striped: true,  //表格显示条纹，默认为false
        pagination: true, // 在表格底部显示分页组件，默认false
        pageList: [10, 20, 30, 40, 50], // 设置页面可以显示的数据条数
        pageSize: 10, // 页面数据条数
        pageNumber: 1, // 首页页码
        sidePagination: 'client', // 设置为客户端分页
        search: true,
        queryParams: function (params) { // 请求服务器数据时发送的参数，可以在这里添加额外的查询参数，返回false则终止请求

            return {
                token: $.cookie("schoolCareerCookie")
            }
        },
        columns: [
            {
                visible: false,
                field: 'recruitmentId', // 返回json数据中的name
                title: '编号', // 表格表头显示文字
                align: 'center', // 左右居中
                valign: 'middle', // 上下居中
            }, {
                field: 'company',
                title: '公司名称',
                align: 'center',
                valign: 'middle',
                formatter: function (value, row, index) {
                    value = value ? value : '';
                    var length = value.length;
                    if (length && length > 12) {
                        length = 12;
                    }
                    return "<span title ='" + value + "'>" + value.substring(0, length) + "..." + "</span>"
                }
            }, {
                field: 'instituteId',
                title: '发布学院',
                align: 'center',
                valign: 'middle',
                formatter: function (value, row, index) {
                    value = value ? value : '';
                    var length = value.length;
                    if (length && length > 12) {
                        length = 12;
                    }
                    return "<span title ='" + value + "'>" + value.substring(0, length) + "..." + "</span>"
                }
            }, {
                field: 'address',
                title: '公司官网',
                align: 'center',
                valign: 'middle',
                formatter: function (value, row, index) {
                    value = value ? value : '';
                    var length = value.length;
                    if (length && length > 12) {
                        length = 12;
                    }
                    return "<span title ='" + value + "'>" + value.substring(0, length) + "..." + "</span>"
                }
            }, {
                field: 'post',
                title: '招聘简介',
                align: 'center',
                valign: 'middle',
                formatter: function (value, row, index) {
                    value = value ? value : '';
                    var length = value.length;
                    if (length && length > 12) {
                        length = 12;
                    }
                    return "<span title ='" + value + "'>" + value.substring(0, length) + "..." + "</span>"
                }
            }, {
                field: 'endTime',
                title: '截止时间',
                align: 'center',
                valign: 'middle',
                formatter: function (value, row, index) {
                    return getMyDate(value)
                }
            }, {
                title: "操作",
                align: 'center',
                valign: 'middle',
                formatter: function (value, row, index) {
                    return '<button class="btn btn-primary btn-sm" onclick="deleteRe(\'' + row.recruitmentId + '\')">删除</button>';
                }
            }
        ],
        onLoadSuccess: function () {  //加载成功时执行
            console.info("加载成功");
        }
        ,
        onLoadError: function () {  //加载失败时执行
            console.info("加载数据失败");
        }
    })
}

function deleteRe(recruitmentId) {
    var subData = {
        "token": $.cookie("schoolCareerCookie"),
        "recruitmentId": recruitmentId
    };
    $.ajax({
        type: "POST",
        url: "./deleteRecruitment",
        dataType: "json",
        data: JSON.stringify(subData),
        contentType: "application/json; charset=utf-8",
        success: function (resp) {
            if (resp.status == 200) {
                toastr.success("删除成功");
                allEr();
            } else {
                toastr.error("删除失败原因：" + resp.msg);
            }
        },
        error: function (resp) {
            toastr.error("错误代码：" + resp.status);
        }
    });
}

function allFu() {
    $("#table").bootstrapTable('destroy');
    $("#table").bootstrapTable({ // 对应table标签的id
        method: "post",
        url: "./findAllFu", // 获取表格数据的url
        cache: false, // 设置为 false 禁用 AJAX 数据缓存， 默认为true
        striped: true,  //表格显示条纹，默认为false
        pagination: true, // 在表格底部显示分页组件，默认false
        pageList: [10, 20, 30, 40, 50], // 设置页面可以显示的数据条数
        pageSize: 10, // 页面数据条数
        pageNumber: 1, // 首页页码
        sidePagination: 'client', // 设置为客户端分页
        search: true,
        queryParams: function (params) { // 请求服务器数据时发送的参数，可以在这里添加额外的查询参数，返回false则终止请求

            return {
                token: $.cookie("schoolCareerCookie")
            }
        },
        columns: [
            {
                visible: false,
                field: 'userId', // 返回json数据中的name
                title: '编号', // 表格表头显示文字
                align: 'center', // 左右居中
                valign: 'middle', // 上下居中
            }, {
                field: 'userInfoId',
                title: '工号',
                align: 'center',
                valign: 'middle',
                formatter: function (value, row, index) {
                    value = value ? value : '';
                    var length = value.length;
                    if (length && length > 12) {
                        length = 12;
                    }
                    return "<span title ='" + value + "'>" + value.substring(0, length) + "..." + "</span>"
                }
            }, {
                field: 'name',
                title: '姓名',
                align: 'center',
                valign: 'middle',
                formatter: function (value, row, index) {
                    value = value ? value : '';
                    var length = value.length;
                    if (length && length > 12) {
                        length = 12;
                    }
                    return "<span title ='" + value + "'>" + value.substring(0, length) + "..." + "</span>"
                }
            }, {
                field: 'instituteId',
                title: '学院',
                align: 'center',
                valign: 'middle',
                formatter: function (value, row, index) {
                    value = value ? value : '';
                    var length = value.length;
                    if (length && length > 12) {
                        length = 12;
                    }
                    return "<span title ='" + value + "'>" + value.substring(0, length) + "..." + "</span>"
                }
            }, {
                field: 'phone',
                title: '联系方式',
                align: 'center',
                valign: 'middle',
                formatter: function (value, row, index) {
                    value = value ? value : '';
                    var length = value.length;
                    if (length && length > 12) {
                        length = 12;
                    }
                    return "<span title ='" + value + "'>" + value.substring(0, length) + "..." + "</span>"
                }
            }, {
                field: 'stClass',
                title: '年级',
                align: 'center',
                valign: 'middle',
                formatter: function (value, row, index) {
                    value = value ? value : '';
                    var length = value.length;
                    if (length && length > 12) {
                        length = 12;
                    }
                    return "<span title ='" + value + "'>" + value.substring(0, length) + "..." + "</span>"
                }
            }, {
                title: "操作",
                align: 'center',
                valign: 'middle',
                formatter: function (value, row, index) {
                    return '<button class="btn btn-primary btn-sm" onclick="deleteFu(\'' + row.userId + '\')">删除</button>';
                }
            }
        ],
        onLoadSuccess: function () {  //加载成功时执行
            console.info("加载成功");
        }
        ,
        onLoadError: function () {  //加载失败时执行
            console.info("加载数据失败");
        }
    })
}

function deleteFu(recruitmentId) {
    var subData = {
        "token": $.cookie("schoolCareerCookie"),
        "userId": recruitmentId
    };
    $.ajax({
        type: "POST",
        url: "./delUser",
        dataType: "json",
        data: JSON.stringify(subData),
        contentType: "application/json; charset=utf-8",
        success: function (resp) {
            if (resp.status == 200) {
                toastr.success("删除成功");
                allFu();
            } else {
                toastr.error("删除失败原因：" + resp.msg);
            }
        },
        error: function (resp) {
            toastr.error("错误代码：" + resp.status);
        }
    });
}

function allStu() {
    $("#table").bootstrapTable('destroy');
    $("#table").bootstrapTable({ // 对应table标签的id
        method: "post",
        url: "./findAllStu", // 获取表格数据的url
        cache: false, // 设置为 false 禁用 AJAX 数据缓存， 默认为true
        striped: true,  //表格显示条纹，默认为false
        pagination: true, // 在表格底部显示分页组件，默认false
        pageList: [10, 20, 30, 40, 50], // 设置页面可以显示的数据条数
        pageSize: 10, // 页面数据条数
        pageNumber: 1, // 首页页码
        sidePagination: 'client', // 设置为客户端分页
        search: true,
        queryParams: function (params) { // 请求服务器数据时发送的参数，可以在这里添加额外的查询参数，返回false则终止请求

            return {
                token: $.cookie("schoolCareerCookie")
            }
        },
        columns: [
            {
                visible: false,
                field: 'userId', // 返回json数据中的name
                title: '编号', // 表格表头显示文字
                align: 'center', // 左右居中
                valign: 'middle', // 上下居中
            }, {
                field: 'userInfoId',
                title: '学号',
                align: 'center',
                valign: 'middle',
                formatter: function (value, row, index) {
                    value = value ? value : '';
                    var length = value.length;
                    if (length && length > 12) {
                        length = 12;
                    }
                    return "<span title ='" + value + "'>" + value.substring(0, length) + "..." + "</span>"
                }
            }, {
                field: 'name',
                title: '姓名',
                align: 'center',
                valign: 'middle',
                formatter: function (value, row, index) {
                    value = value ? value : '';
                    var length = value.length;
                    if (length && length > 12) {
                        length = 12;
                    }
                    return "<span title ='" + value + "'>" + value.substring(0, length) + "..." + "</span>"
                }
            }, {
                field: 'instituteId',
                title: '学院',
                align: 'center',
                valign: 'middle',
                formatter: function (value, row, index) {
                    value = value ? value : '';
                    var length = value.length;
                    if (length && length > 12) {
                        length = 12;
                    }
                    return "<span title ='" + value + "'>" + value.substring(0, length) + "..." + "</span>"
                }
            }, {
                field: 'phone',
                title: '联系方式',
                align: 'center',
                valign: 'middle',
                formatter: function (value, row, index) {
                    value = value ? value : '';
                    var length = value.length;
                    if (length && length > 12) {
                        length = 12;
                    }
                    return "<span title ='" + value + "'>" + value.substring(0, length) + "..." + "</span>"
                }
            }, {
                field: 'stClass',
                title: '专业班级',
                align: 'center',
                valign: 'middle',
                formatter: function (value, row, index) {
                    value = value ? value : '';
                    var length = value.length;
                    if (length && length > 12) {
                        length = 12;
                    }
                    return "<span title ='" + value + "'>" + value.substring(0, length) + "..." + "</span>"
                }
            }, {
                field: 'workStat',
                title: '去向状态',
                align: 'center',
                valign: 'middle',
                formatter: function (value, row, index) {
                    var stats = value;
                    if (value == 0) {
                        stats = "未签约";
                    } else if (value == 1) {
                        stats = "等待签约";
                    } else if (value == 2) {
                        stats = "已签约";
                    } else if (value == 3) {
                        stats = "考上研究生";
                    } else if (value == 4) {
                        stats = "保上研究生";
                    } else if (value == 4) {
                        stats = "出国留学";
                    }
                    return "<span title ='" + value + "'>" + stats + "</span>"
                }
            }, {
                field: 'company',
                title: '签署公司或学校',
                align: 'center',
                valign: 'middle',
                formatter: function (value, row, index) {
                    value = value ? value : '';
                    var length = value.length;
                    if (length && length > 12) {
                        length = 12;
                    }
                    return "<span title ='" + value + "'>" + value.substring(0, length) + "..." + "</span>"
                }
            }, {
                title: "操作",
                align: 'center',
                valign: 'middle',
                formatter: function (value, row, index) {
                    return '<button class="btn btn-primary btn-sm" onclick="deleteStu(\'' + row.userId + '\')">删除</button>';
                }
            }
        ],
        onLoadSuccess: function () {  //加载成功时执行
            console.info("加载成功");
        }
        ,
        onLoadError: function () {  //加载失败时执行
            console.info("加载数据失败");
        }
    })
}

function deleteStu(userId) {
    var subData = {
        "token": $.cookie("schoolCareerCookie"),
        "userId": userId
    };
    $.ajax({
        type: "POST",
        url: "./delUser",
        dataType: "json",
        data: JSON.stringify(subData),
        contentType: "application/json; charset=utf-8",
        success: function (resp) {
            if (resp.status == 200) {
                toastr.success("删除成功");
                allStu();
            } else {
                toastr.error("删除失败原因：" + resp.msg);
            }
        },
        error: function (resp) {
            toastr.error("错误代码：" + resp.status);
        }
    });
}

function searchUs() {
    $("#table").bootstrapTable('destroy');
    $("#table").bootstrapTable({ // 对应table标签的id
        method: "post",
        url: "../allRecruitment", // 获取表格数据的url
        cache: false, // 设置为 false 禁用 AJAX 数据缓存， 默认为true
        striped: true,  //表格显示条纹，默认为false
        pagination: true, // 在表格底部显示分页组件，默认false
        pageList: [10, 20, 30, 40, 50], // 设置页面可以显示的数据条数
        pageSize: 10, // 页面数据条数
        pageNumber: 1, // 首页页码
        sidePagination: 'client', // 设置为客户端分页
        search: true,
        queryParams: function (params) { // 请求服务器数据时发送的参数，可以在这里添加额外的查询参数，返回false则终止请求

            return {}
        },
        columns: [
            {
                visible: false,
                field: 'userId', // 返回json数据中的name
                title: '编号', // 表格表头显示文字
                align: 'center', // 左右居中
                valign: 'middle', // 上下居中
            }, {
                field: 'userInfoId',
                title: '工号',
                align: 'center',
                valign: 'middle',
                formatter: function (value, row, index) {
                    value = value ? value : '';
                    var length = value.length;
                    if (length && length > 12) {
                        length = 12;
                    }
                    return "<span title ='" + value + "'>" + value.substring(0, length) + "..." + "</span>"
                }
            }, {
                field: 'name',
                title: '姓名',
                align: 'center',
                valign: 'middle',
                formatter: function (value, row, index) {
                    value = value ? value : '';
                    var length = value.length;
                    if (length && length > 12) {
                        length = 12;
                    }
                    return "<span title ='" + value + "'>" + value.substring(0, length) + "..." + "</span>"
                }
            }, {
                field: 'instituteId',
                title: '学院',
                align: 'center',
                valign: 'middle',
                formatter: function (value, row, index) {
                    value = value ? value : '';
                    var length = value.length;
                    if (length && length > 12) {
                        length = 12;
                    }
                    return "<span title ='" + value + "'>" + value.substring(0, length) + "..." + "</span>"
                }
            }, {
                field: 'phone',
                title: '联系方式',
                align: 'center',
                valign: 'middle',
                formatter: function (value, row, index) {
                    value = value ? value : '';
                    var length = value.length;
                    if (length && length > 12) {
                        length = 12;
                    }
                    return "<span title ='" + value + "'>" + value.substring(0, length) + "..." + "</span>"
                }
            }, {
                field: 'stClass',
                title: '年级',
                align: 'center',
                valign: 'middle',
                formatter: function (value, row, index) {
                    value = value ? value : '';
                    var length = value.length;
                    if (length && length > 12) {
                        length = 12;
                    }
                    return "<span title ='" + value + "'>" + value.substring(0, length) + "..." + "</span>"
                }
            }, {
                title: "操作",
                align: 'center',
                valign: 'middle',
                formatter: function (value, row, index) {
                    return '<button class="btn btn-primary btn-sm" onclick="collectRec(\'' + row.userId + '\')">删除</button>';
                }
            }
        ],
        onLoadSuccess: function () {  //加载成功时执行
            console.info("加载成功");
        }
        ,
        onLoadError: function () {  //加载失败时执行
            console.info("加载数据失败");
        }
    })
}

function addFuDaoYuan() {
    var userInfoId = $.trim($("#u1").val());
    var pwd = $.trim($("#u2").val());

    if (userInfoId == null || pwd == null) {
        toastr.error("信息不全！");
    } else {

        $.ajax({
            type: "POST",
            url: "../register",
            data: {"id": userInfoId, "pwd": pwd, "type": "company"},
            dataType: "json",
            success: function (resp) {
                if (resp.status != 200) {
                    toastr.error(resp.msg);
                } else {
                    toastr.info("添加成功");
                    $("#hid").click();
                }
            },
            error: function (resp) {
                toastr.error("访问出错！");
            }
        });
    }
}

function getMyDate(str) {
    var oDate = new Date(str),
        oYear = oDate.getFullYear(),
        oMonth = oDate.getMonth() + 1,
        oDay = oDate.getDate(),
        oTime = oYear + '-' + getzf(oMonth) + '-' + getzf(oDay);//最后拼接时间
    return oTime;
};

//补0操作
function getzf(num) {
    if (parseInt(num) < 10) {
        num = '0' + num;
    }
    return num;
}
