import Loadable from 'react-loadable'
import React from 'react'
export const home = Loadable({
    loader: () => import('./pages/home/home'),
    loading
})

export const object1 = Loadable({
    loader: () => import('./pages/object/object1'),
    loading
})

export const object2 = Loadable({
    loader: () => import('./pages/object/object2'),
    loading
})

export const object3 = Loadable({
    loader: () => import('./pages/object/object3'),
    loading
})

export const object4 = Loadable({
    loader: () => import('./pages/object/object4'),
    loading
})

export const array1 = Loadable({
    loader: () => import('./pages/array/array1'),
    loading
})

export const array2 = Loadable({
    loader: () => import('./pages/array/array2'),
    loading
})

export const symbol = Loadable({
    loader: () => import('./pages/symbol'),
    loading
})

export const set = Loadable({
    loader: () => import('./pages/set'),
    loading
})

export const map = Loadable({
    loader: () => import('./pages/map'),
    loading
})

export const proxy = Loadable({
    loader: () => import('./pages/proxy'),
    loading
})

export const reflect = Loadable({
    loader: () => import('./pages/reflect'),
    loading
})

export const promise = Loadable({
    loader: () => import('./pages/promise'),
    loading
})

export const classComp = Loadable({
    loader: () => import('./pages/class'),
    loading
})

export const moduleComp = Loadable({
    loader: () => import('./pages/module'),
    loading
})

export const decorator = Loadable({
    loader: () => import('./pages/decorator'),
    loading
})

function loading(){
    return <div></div>;
}