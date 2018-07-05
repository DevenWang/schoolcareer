function all() {
    $("#table").bootstrapTable('destroy');
    $("#table").bootstrapTable({ // 对应table标签的id
        method: "post",
        url: "./allRecruitment", // 获取表格数据的url
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
                    return '<button class="btn btn-primary btn-sm" onclick="collectRec(\'' + row.recruitmentId + '\')">收藏</button>' +
                        '&nbsp;&nbsp;<button class="btn btn-primary btn-sm" onclick="retail(\'' + row.recruitmentId + '\')">查看</button>';
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

function collectRec(recruitmentId) {
    var subData = {
        "token": $.cookie("schoolCareerCookie"),
        "workId": recruitmentId
    };
    $.ajax({
        type: "POST",
        url: "./addApply",
        dataType: "json",
        data: JSON.stringify(subData),
        contentType: "application/json; charset=utf-8",
        success: function (resp) {
            if (resp.status == 200) {
                toastr.success("收藏成功");
            } else {
                toastr.error("收藏失败原因：" + resp.msg);
            }
        },
        error: function (resp) {
            toastr.error("错误代码：" + resp.status);
        }
    });
}

function part() {
    $("#table").bootstrapTable('destroy');
    $("#table").bootstrapTable({ // 对应table标签的id
        method: "post",
        url: "./instRecruitments", // 获取表格数据的url
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
                    return '<button class="btn btn-primary btn-sm" onclick="collectRec(\'' + row.recruitmentId + '\')">收藏</button>' +
                        '&nbsp;&nbsp;<button class="btn btn-primary btn-sm" onclick="retail(\'' + row.recruitmentId + '\')">查看</button>';
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

function others() {
    $("#table").bootstrapTable('destroy');
    $("#table").bootstrapTable({ // 对应table标签的id
        method: "post",
        url: "./notInstRecruitments", // 获取表格数据的url
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
                    return '<button class="btn btn-primary btn-sm" onclick="collectRec(\'' + row.recruitmentId + '\')">收藏</button>' +
                        '&nbsp;&nbsp;<button class="btn btn-primary btn-sm" onclick="retail(\'' + row.recruitmentId + '\')">查看</button>';
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

function mycoll() {
    $("#table").bootstrapTable('destroy');
    $("#table").bootstrapTable({ // 对应table标签的id
        method: "post",
        url: "./userApply", // 获取表格数据的url
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
                    return '<button class="btn btn-primary btn-sm" onclick="deleteColl(\'' + row.recruitmentId + '\')">取消收藏</button>' +
                        '&nbsp;&nbsp;<button class="btn btn-primary btn-sm" onclick="retail(\'' + row.recruitmentId + '\')">查看</button>';
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

function deleteColl(recruitmentId) {
    var subData = {
        "token": $.cookie("schoolCareerCookie"),
        "applyId": recruitmentId
    };
    $.ajax({
        type: "POST",
        url: "./deleteApply",
        dataType: "json",
        data: JSON.stringify(subData),
        contentType: "application/json; charset=utf-8",
        success: function (resp) {
            if (resp.status == 200) {
                toastr.success("收藏成功");
                mycoll()
            } else {
                toastr.error("收藏失败原因：" + resp.msg);
            }
        },
        error: function (resp) {
            toastr.error("错误代码：" + resp.status);
        }
    });

}

function search() {
    $("#table").bootstrapTable('destroy');
    $("#table").bootstrapTable({ // 对应table标签的id
        method: "post",
        url: "./company", // 获取表格数据的url
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
                company: $.trim($("#searchText1").val()),
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
                    return '<button class="btn btn-primary btn-sm" onclick="collectRec(\'' + row.recruitmentId + '\')">收藏</button>' +
                        '&nbsp;&nbsp;<button class="btn btn-primary btn-sm" onclick="retail(\'' + row.recruitmentId + '\')" >查看</button>';
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

function addUInfo() {
    var userInfoId = $.trim($("#u1").val());
    var name = $.trim($("#u2").val());
    var stClass = $.trim($("#u3").val());
    var phone = $.trim($("#u5").val());
    var workStat = $.trim($("#u6").val());
    var instituteId = $.trim($("#u4").val());
    var company = $.trim($("#u7").val());

    if (userInfoId == null || name == null || phone == null || instituteId == null) {
        toastr.error("信息不全！");
    } else {
        var subData = {
            "token": $.cookie("schoolCareerCookie"),
            "userInfoId": userInfoId,
            "name": name,
            "stClass": stClass,
            "phone": phone,
            "workStat": workStat,
            "instituteId": instituteId,
            "company": company
        };
        $.ajax({
            type: "POST",
            url: "./addUserInfo",
            dataType: "json",
            data: JSON.stringify(subData),
            contentType: "application/json; charset=utf-8",
            success: function (resp) {
                if (resp.status == 200) {
                    toastr.success("添加成功");
                    $("#hid").click();
                } else {
                    toastr.error("添加失败原因：" + resp.msg);
                }
            },
            error: function (resp) {
                toastr.error("错误代码：" + resp.status);
            }
        });
    }
}

function retail(recruitmentId) {

    $.ajax({
        type: "POST",
        url: "./oneRecruitment",
        dataType: "json",
        data: {"token": $.cookie("schoolCareerCookie"), "id": recruitmentId},
        success: function (resp) {
            if (resp.status == 200) {
                $("#myText").html("公司名：");
                $("#myText").append("<br />");
                $("#myText").append(resp.data.company);
                $("#myText").append("<br />");
                $("#myText").append("公司官网：");
                $("#myText").append("<br />");
                $("#myText").append(resp.data.address);
                $("#myText").append("<br />");
                $("#myText").append("招聘简介：");
                $("#myText").append("<br />");
                $("#myText").append(resp.data.post);
                $("#myText").append("<br />");
                $("#myText").append("截止时间：");
                $("#myText").append("<br />");
                $("#myText").append(getMyDate(resp.data.endTime));
                $("#mYcheck").click();
            } else {
                toastr.error("失败原因：" + resp.msg);
            }
        },
        error: function (resp) {
            toastr.error("错误代码：" + resp.status);
        }
    });

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