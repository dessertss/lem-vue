import Mock from 'mockjs'

Mock.mock('/api/testmock', 'get', () => {
    return {
        status: 200,
        arr: Mock.mock({
            'list|20-50': [{
                name: '@cname()',
                address: '@city(true)',
                date: '@date()'
            }]
        })
    }
})