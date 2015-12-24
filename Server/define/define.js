/**
 * Created by sunxin on 15/11/13.
 */
exports.dbpath="mongodb://localhost:27017/Boss";
exports.imgpath="/data";
exports.service=[
    {
        method:"GET",
        path:"/user/check",
        param: {
              username:String,
        },
        data:Number
    },
    {
        method:"POST",
        path:"/user/register",
        param: {
            username:String,
            pwd:String,
            name:String,
            //age:Number,
            //sex:String,
            question:String,
            answer:String,
            time:String
        },
        data:String
    },
    {
        method:"GET",
        path:"/user/info",
        param: {
            username:String,
            pwd:String,
            time:String
        },
        data:{
            _id:String,
            username:String,
            pwd:String,
            name:String,
            age:Number,
            sex:String,
            question:String,
            answer:String,
            photo:String,
            score:Number,
            logincount:Number,
            level:[
                {
                    name:String,
                    level:String
                }
            ]
        }
    },
    {
        method:"POST",
        path:"/user/photo",
        param: {
            username:String,
            pwd:String,
            //file:File
        },
        data:String
    },
    {
        method:"PUT",
        path:"/user/editname",
        param: {
            username:String,
            pwd:String,
            name:String
        },
        data:String
    },
    {
        method:"PUT",
        path:"/user/pwd",
        param: {
            username:String,
            pwd:String,
            newpwd:String
        },
        data:String
    },
    {
        method:"GET",
        path:"/user/question",
        param: {
            username:String
        },
        data:String
    },
    {
        method:"PUT",
        path:"/user/reset",
        param: {
            username:String,
            answer:String,
            pwd:String
        },
        data:String
    },
    {
        method:"GET",
        path:"/user/history",
        param:{
            username:String,
            pwd:String,
            type:String,
            page:Number
        },
        data:[
            {
                type:String,
                date:String,
                use:Number,
                percent:Number,
                item:[String]
            }
        ]
    },
    {
        method:"GET",
        path:"/rank/top",
        param: {
            username:String,
            pwd:String,
            page:Number
        },
        data:[
            {
                name:String,
                photo:String,
                score:Number
            }
        ]
    },
    {
        method:"GET",
        path:"/level/info",
        param: {
            username:String,
            pwd:String,
            type:String
        },
        data:{
            level:String,
            score:Number,
            totleLevel:[String]
        }
    },
    {
        method:"GET",
        path:"/level/type",
        param: {
            username:String,
            pwd:String,
        },
        data:[{
            name:String,
            des:String
        }]
    },
    {
        method:"GET",
        path:"/level/enter",
        param: {
            username:String,
            pwd:String,
            type:String,
            level:String
        },
        data:{
            name:String,
            time:Number,
            step:Number,
            enemy:[
                {
                    name:String,
                    count:Number
                }
            ]
        }
    },
    {
        method:"GET",
        path:"/level/start",
        param: {
            username:String,
            pwd:String,
            type:String,
            level:String,
            power:String
        },
        data:[
            {
                name:String,
                data:[
                    {
                        _id:String,
                        power:String,
                        content:String,
                        answer:{
                            ok:String,
                            wrong:[String]
                        }
                    }
                ]
            }
        ]
    },
    {
        method:"GET",
        path:"/level/enter",
        param: {
            username:String,
            pwd:String,
            type:String,
            level:String
        },
        data:{
            name:String,
            time:String,
            step:Number,
            enemy:[
                {
                    name:String,
                    count:Number
                }
            ]
        }
    },
    {
        method:"POST",
        path:"/level/leave",
        param: {
            username:String,
            pwd:String,
            type:String,
            level:String,
            success:Number,
            createtime:String,
            usetime:String,
            percent:Number,
            score:Number,
            challenge:Number
            //item:String
        },
        data:{
            score:Number,
            level:String
        }
    },
    {
        method:"GET",
        path:"/power/info",
        param: {
            username:String,
            pwd:String
        },
        data:[
            {
            name:String,
            value:Number
            }
        ]
    },
    {
        method:"GET",
        path:"/people/info",
        param: {
            username:String,
            pwd:String
        },
        data:[
            {
                name:String,
                talk:String,
                money:Number,
                speed:Number,
                des:String
            }
        ]
    },
    {
        method:"GET",
        path:"/item",
        param: {
            username:String,
            pwd:String,
            item:String       //以逗号分隔
        },
        data:[
            {
                _id:String,
                power:String,
                content:String,
                answer:{
                    ok:String,
                    wrong:[String]
                }
            }
        ]
    },
    {
        method:"DELETE",
        path:"/user/deletehistory",
        param: {
            username:String,
            pwd:String,
            type:String
        },
        data:String
    },
];