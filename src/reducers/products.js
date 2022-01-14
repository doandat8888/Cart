var inititalState = [
    {
        id: 1,
        name: 'Macbook Air M1',
        image: 'https://cdn.tgdd.vn/Products/Images/44/239560/macbook-pro-m1-2020-silver-600x600.jpg',
        description: 'Sản phẩm do Apple sản xuất',
        price: '1500',
        inventory: 10,
        rating: 4,
    },
    {
        id: 2,
        name: 'ASUS S430UA-EBO97T (Gold)',
        image: 'https://phucanhcdn.com/media/product/33268-mau-laptop-asus-s430ua-eb097t.jpg',
        description: 'Sản phẩm do ASUS sản xuất',
        price: '1000',
        inventory: 10,
        rating: 2,
    },
    {
        id: 3,
        name: 'Dell Inspiron 16Plus 7610',
        image: 'https://laptopg7.vn/images/detailed/102/Dell-inspiron-7610-laptopg7-com-vn-01-1627977537.jpg',
        description: 'Sản phẩm do Dell sản xuất',
        price: '995',
        inventory: 10,
        rating: 5,
    },
    {
        id: 4,
        name: 'Macbook Pro 2017 MPX20',
        image: 'https://drive.gianhangvn.com/image/macbook-pro-2017-tai-da-nang-1985981j20085.jpg',
        description: 'Sản phẩm do Apple sản xuất',
        price: '1500',
        inventory: 10,
        rating: 5,
    },
    {
        id: 5,
        name: 'Dell Latitude E7280',
        image: 'https://laptops.vn/uploads/laptop-dell-do-hoa-chuyen-nghiep_1621040402..png',
        description: 'Sản phẩm do Dell sản xuất',
        price: '1200',
        inventory: 10,
        rating: 4,
    },
    {
        id: 6,
        name: 'ASUS X409MA-BV032T (Bạc)',
        image: 'https://hc.com.vn/i/ecommerce/media/GS.003772_FEATURE_58778.jpg',
        description: 'Sản phẩm do ASUS sản xuất',
        price: '980',
        inventory: 10,
        rating: 3,
    },
];

const products = (state = inititalState, action) => {
    switch(action.type) {
        default: return [...state];
    }
}

export default products;