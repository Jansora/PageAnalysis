/*
* @file post.jsx
* @author jansora
* @date 2020/2/5
*/


import React, {useEffect, useState} from "react";
import {client} from "./index";
import {message} from "antd";
import {stringify} from "qs"


export const AddTemplate = (data, callback) => {

    client.post('template/add', stringify(data))
        .then(response =>  {
            const { data } = response;
            if (data.status){
                message.success("添加成功")
                callback && callback(data.data)
            } else {
                message.error(data.message)
            }

        }).catch( e => {
    }).finally(()=> {
    })


    return null;
};

export const UpdateTemplate = (data, callback) => {

    client.post('template/update', stringify(data))
        .then(response =>  {
            const { data } = response;
            if (data.status){
                message.success("更新成功")
                callback && callback()
            } else {
                message.error(data.message)
            }

        }).catch( e => {
    }).finally(()=> {
    })


    return null;
};

export const UpdateTemplate = (resource, setLoading, setPost) => {

    client.post('template/update/' + resource )
        .then(response =>  {
            const { data } = response;
            if (data.status){
                setPost && setPost(data.data)
                setLoading && setLoading(false)
            } else {
                message.error(data.message)
            }

        }).catch( e => {
    }).finally(()=> {
    })


    return null;
};


export const QueryTemplate = (resource, callback) => {



    const [template, setTemplate] = useState({title: '加载中',});
    const [loading, setLoading] = useState(false);

    useEffect(()=> {
        if(resource) {
            setLoading(true)
        }
    }, [resource])

    useEffect(()=> {
        if (loading && resource) {
            client.get(`template/${resource}`)
                .then(response =>  {
                    const { data } = response;
                    if (data.status){
                        setTemplate(data.data)
                        callback && callback()
                    } else {
                        message.error(data.message)
                    }

                }).catch( e => {
            }).finally(()=> { setLoading(false)
            })

        }


    }, [resource, loading]);



    return [template, setTemplate, loading, setLoading];
};

export const QueryTemplates = (args) => {

    const [templates, setTemplates] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(()=> {
        if (loading) {
            client.get(`template/findAll?${stringify(args)}`).then(response => {
                const { data } = response;
                    if(data.status){
                        setTemplates(data.data)
                        message.success("获取成功")
                    } else {
                        message.error(data.message);
                    }
                }).finally(() => setLoading(false));
        }
    }, [loading, args]);

    return [templates, setTemplates, loading, setLoading];

};


export const DeleteTemplate = (id, callback) => {

    client.delete(`template/${id}`)
        .then(response => {
            const {data} = response;
            if (data.status) {
                message.success("删除成功")
                callback && callback()
            } else {
                message.error(data.message)
            }

        }).catch(e => {
    }).finally(() => {

    })
    return null;
};
