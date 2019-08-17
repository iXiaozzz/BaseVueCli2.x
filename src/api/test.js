import request from '@/utils/request'

export function getTestData(params) {
  return request({
    url: '/article/list',
    methods: 'get',
    data: params || {}
  });
}

export function getArticle(params) {
  return request({
    url: '/article/detail',
    methods: 'get',
    data: params || {}
  })
}
