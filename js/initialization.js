//Khoi tao danh sach san pham
function createProduct() {
    if (localStorage.getItem('products') == null) {
        let products = [{
            id: 1,
            status: 1, 
            title: 'Váy trắng',
            img: './assets/img/products/váy.jpg',
            category: 'Thời trang',
            price: 200000,
            desc: 'Váy trắng còn rất sạch, ít dấu hiệu sử dụng. Chất vải mềm mại, không xù lông hay rách.'
        },
        {
            id: 2,
            status: 1, 
            title: 'Canon EOS 6D mark II',
            img: './assets/img/products/6d.jpg',
            category: 'Đồ điện tử',
            price: 14800000,
            desc: 'Ngoại hình: Máy ảnh vẫn còn trong tình trạng tốt, một vài vết xước nhẹ trên thân máy nhưng không ảnh hưởng đến chức năng sử dụng. Ống kính EF 50mm f/1.8 sạch, không trầy xước'
        },
        {
            id: 3,
            status: 1, 
            title: 'Giày Air force1',
            img: './assets/img/products/airforceone.jpg',
            category: 'thời trang',
            price: 180000,
            desc: 'Ngoại hình: Giày còn mới khoảng 85%, phần đế còn chắc chắn, không bị mòn nhiều. Có một vài vết ố nhẹ ở thân giày nhưng không đáng kể. Dây giày vẫn sạch sẽ, logo Nike rõ nét.'
        },
        {
            id: 4,
            status: 1, 
            title: 'Ấm nước',
            img: './assets/img/products/âmnc.jpg',
            category: 'Đồ gia dụng',
            price: 100000,
            desc: 'Ấm nước còn hoạt động tốt, không bị rỉ sét, tay cầm và nắp ấm chắc chắn. Có thể có vài vết xước nhẹ do sử dụng.'
        },
        {
            id: 5,
            status: 1, 
            title: '4',
            img: './assets/img/products/âmncc.jpg',
            category: 'Đồ gia dụng',
            price: 100000,
            desc: 'Ấm nước còn hoạt động tốt, không bị rỉ sét, tay cầm và nắp ấm chắc chắn. Có thể có vài vết xước nhẹ do sử dụng.'
        },
        {
            id: 6,
            status: 1, 
            title: 'Áo cổ cao',
            img: './assets/img/products/aococao.jpg',
            category: 'Thời trang',
            price: 110000,
            desc: 'Ngoại hình: Còn rất mới, chất liệu mềm mại, không có vết xù lông hay rách'
        },
        {
            id: 7,
            status: 1, 
            title: 'Áo dài',
            img: './assets/img/products/aodai.jpg',
            category: 'Thời trang',
            price: 180000,
            desc: 'Áo dài còn mới khoảng 85-90%, không có vết rách, chỉn chu và còn giữ form dáng tốt. Một vài nếp gấp nhẹ do bảo quản.'
        },
        {
            id: 8,
            status: 1, 
            title: 'Bàn học',
            img: './assets/img/products/bàn.jpg',
            category: 'Đồ gia dụng',
            price: 180000,
            desc: 'Bàn trà còn chắc chắn, không bị lung lay. Bề mặt có thể có vài vết xước nhỏ nhưng không ảnh hưởng đến thẩm mỹ.'
        },
        {
            id: 9,
            status: 1, 
            title: 'Bàn học',
            img: './assets/img/products/banhoc1.jpg',
            category: 'Đồ dùng học tập',
            price: 200000,
            desc: 'Bàn học còn chắc chắn, bề mặt bàn phẳng và không bị cong vênh. Có vài vết xước nhẹ hoặc dấu vết mờ của bút do sử dụng.'
        },
        {
            id: 10,
            status: 1, 
            title: 'Bàn học',
            img: './assets/img/products/banhoc2.jpg',
            category: 'Đồ dùng học tập',
            price: 160000,
            desc: 'Bàn học còn chắc chắn, bề mặt bàn phẳng và không bị cong vênh. Có vài vết xước nhẹ hoặc dấu vết mờ của bút do sử dụng.'
        },
        {
            id: 11,
            status: 1, 
            title: 'Bàn phím cơ',
            img: './assets/img/products/banphim.jpg',
            category: 'Đồ điện tử',
            price: 180000,
            desc: 'Bàn phím còn nhạy, không bị liệt phím. Có thể có một số vết xước nhẹ trên bề mặt do sử dụng.'
        },
        {
            id: 12,
            status: 1, 
            title: 'Bình giữ nhiệt',
            img: './assets/img/products/binhgiunhiet.jpg',
            category: 'Đồ gia dụng',
            price: 180000,
            desc: 'Bình giữ nhiệt còn nguyên vẹn, khả năng giữ nhiệt tốt, không rò rỉ nước. Có thể có vài vết trầy xước nhẹ.'
        },
        {
            id: 13,
            status: 1, 
            title: 'Bính siêu tốc',
            img: './assets/img/products/bínhieutoc.jpg',
            category: 'Đồ gia dụng',
            price: 180000,
            desc: 'Bình còn hoạt động tốt, đun nước nhanh, không rò rỉ nước. Vỏ ngoài có thể có vết xước nhỏ nhưng không móp méo.'
        },
        {
            id: 14,
            status: 1, 
            title: 'Bàn học',
            img: './assets/img/products/bnahoc3.jpg',
            category: 'Đồ dùng học tập',
            price: 150000,
            desc: 'Bàn học còn chắc chắn, bề mặt bàn phẳng và không bị cong vênh. Có vài vết xước nhẹ hoặc dấu vết mờ của bút do sử dụng.'
        },
        {
            id: 15,
            status: 1, 
            title: 'Bộ nồi chảo',
            img: './assets/img/products/Bonoichao.jpg',
            category: 'Đồ gia dụng',
            price: 110000,
            desc: ''
        },
        {
            id: 16,
            status: 1, 
            title: 'Bộ dao kéo',
            img: './assets/img/products/bodaokeo.jpg',
            category: 'Đồ gia dụng',
            price: 100000,
            desc: ''
        },
        {
            id: 17,
            status: 1, 
            title: 'Bộ dao kéo',
            img: './assets/img/products/Bodaokeo.jpg',
            category: 'Đồ gia dụng',
            price: 130000,
            desc: '.'
        },
        {
            id: 18,
            status: 1, 
            title: 'Bút',
            img: './assets/img/products/bút.jpg',
            category: 'Đồ dùng học tập',
            price: 80000,
            desc: ''
        },
        {
            id: 19,
            status: 1, 
            title: 'Áo Cardigan',
            img: './assets/img/products/cadigan.jpg',
            category: 'Thời trang',
            price: 180000,
            desc: ''
        },
        {
            id: 20,
            status: 1, 
            title: 'Chân váy',
            img: './assets/img/products/chanvay.jpg',
            category: 'Thời trang',
            price: 120000,
            desc: 'Chân váy còn đẹp, không xù lông hay sờn rách. Phần khóa kéo, cúc áo còn chắc chắn. Kiểu dáng có thể là chân váy chữ A, chân váy xòe hoặc bút chì.'
        },
        {
            id: 21,
            status: 1, 
            title: 'Chân váy dài',
            img: './assets/img/products/chanvaydai.jpg',
            category: 'Thời trang',
            price: 180000,
            desc: 'Chân váy còn đẹp, không xù lông hay sờn rách. Phần khóa kéo, cúc áo còn chắc chắn. Kiểu dáng có thể là chân váy chữ A, chân váy xòe hoặc bút chì.'
        },
        {
            id: 22,
            status: 1, 
            title: 'Cốc giữ nhiệt',
            img: './assets/img/products/cocgiunhiet.jpg',
            category: 'Đồ gia dụng',
            price: 80000,
            desc: 'Cốc giữ nhiệt còn mới khoảng 85-90%, nắp đậy kín, không bị rò nước. Có thể có vết trầy nhẹ bên ngoài.'
        },
        {
            id: 23,
            status: 1, 
            title: 'Giày Converse',
            img: './assets/img/products/converse.jpg',
            category: 'Thời trang',
            price: 180000,
            desc: 'Giày còn khoảng 80-90% so với ban đầu. Đế giày còn nguyên vẹn, không bong tróc. Phần vải có thể hơi nhăn nhưng không rách.'
        },
        {
            id: 24,
            status: 1, 
            title: 'Giày Converse Chuck 70s',
            img: './assets/img/products/ConverseChuck70.jpg',
            category: 'Thời trang',
            price: 180000,
            desc: 'Giày còn khoảng 80-90% so với ban đầu. Đế giày còn nguyên vẹn, không bong tróc. Phần vải có thể hơi nhăn nhưng không rách.'
        },
        {
            id: 25,
            status: 1, 
            title: 'ÁO bóng đá',
            img: './assets/img/products/dabong.jpg',
            category: 'Thời trang',
            price: 80000,
            desc: ''
        },
        {
            id: 26,
            status: 1, 
            title: 'Tủ đặt sách',
            img: './assets/img/products/dâtsavh.jpg',
            category: 'Đồ gia dụng',
            price: 180000,
            desc: ''
        },
        {
            id: 27,
            status: 1, 
            title: 'Máy tính DELL',
            img: './assets/img/products/dell.jpg',
            category: 'Đồ điện tử',
            price: 8180000,
            desc: ''
        },
        {
            id: 28,
            status: 1, 
            title: 'Đèn ngủ',
            img: './assets/img/products/đèn.jpg',
            category: 'Đồ gia dụng',
            price: 120000,
            desc: ''
        },
        {
            id: 29,
            status: 1, 
            title: 'Dép',
            img: './assets/img/products/dep.jpg',
            category: 'Thời trang',
            price: 90000,
            desc: ''
        },
        {
            id: 30,
            status: 1, 
            title: 'Dép',
            img: './assets/img/products/dep2.jpg',
            category: 'Thời trang',
            price: 70000,
            desc: ''
        },
        {
            id: 31,
            status: 1, 
            title: 'Máy ảnh Fujifilm',
            img: './assets/img/products/fuji.jpg',
            category: 'Đồ điện tử',
            price: 6800000,
            desc: ''
        },
        {
            id: 31,
            status: 1, 
            title: 'Giày Air force1',
            img: './assets/img/products/giayairforce1.jpg',
            category: 'Thời trang',
            price: 180000,
            desc: ''
        },
        {
            id: 32,
            status: 1, 
            title: 'Giường Pallet',
            img: './assets/img/products/giuong.jpg',
            category: 'Đồ gia dụng',
            price: 180000,
            desc: ''
        },
        {
            id: 33,
            status: 1, 
            title: 'Gương',
            img: './assets/img/products/gương.jpg',
            category: 'Đồ gia dụng',
            price: 180000,
            desc: ''
        },
        {
            id: 34,
            status: 1, 
            title: 'Váy hai dây',
            img: './assets/img/products/haiday.jpg',
            category: 'Thời trang',
            price: 180000,
            desc: ''
        },
        {
            id: 35,
            status: 1, 
            title: 'Áo hoodie',
            img: './assets/img/products/hodie.jpg',
            category: 'Thời trang',
            price: 180000,
            desc: 'Áo hoodie còn khoảng 80-90% mới, có thể có một vài dấu hiệu sử dụng như xù lông nhẹ hoặc mờ hình in/thêu (nếu có). Dây rút và mũ áo vẫn còn nguyên vẹn, không bị rách hay hư hỏng. Phần bo tay và gấu áo còn đàn hồi tốt.'
        },
        {
            id: 36,
            status: 1, 
            title: 'Hộp đựng thức ăn',
            img: './assets/img/products/Hopdungthucan.jpg',
            category: 'Đồ gia dụng',
            price: 180000,
            desc: ''
        },
        {
            id: 37,
            status: 1, 
            title: 'Iphone 11 pro',
            img: './assets/img/products/ip11pro.jpg',
            category: 'Đồ điện tử',
            price: 4800000,
            desc: ''
        },
        {
            id: 38,
            status: 1, 
            title: 'Kệ đựng đồ',
            img: './assets/img/products/kedungdo.jpg',
            category: 'Đồ gia dụng',
            price: 180000,
            desc: ''
        },{
            id: 39,
            status: 1, 
            title: 'Áo khoác Jean',
            img: './assets/img/products/khoacjean.jpg',
            category: 'Thời trang',
            price: 180000,
            desc: ''
        },
        {
            id: 40,
            status: 1, 
            title: 'Áo len chui',
            img: './assets/img/products/lenchui.jpg',
            category: 'Thời trang',
            price: 180000,
            desc: ''
        },
        {
            id: 41,
            status: 1, 
            title: 'Macbook',
            img: './assets/img/products/mac.jpg',
            category: 'Đồ điện tử',
            price: 180000,
            desc: ''
        },
        {
            id: 42,
            status: 1, 
            title: 'Máy hút bụi',
            img: './assets/img/products/máyhut.jpg',
            category: 'Đồ gia dụng',
            price: 180000,
            desc: ''
        },
        {
            id: 43,
            status: 1, 
            title: 'Máy tính Casio 570VN',
            img: './assets/img/products/máytinh1.jpg',
            category: 'Đồ dùng học tập',
            price: 180000,
            desc: ''
        },
        {
            id: 44,
            status: 1, 
            title: 'Casio 570 VN',
            img: './assets/img/products/maytinh2.jpg',
            category: 'Đồ dùng học tập',
            price: 180000,
            desc: ''
        },
        {
            id: 45,
            status: 1, 
            title: 'Muỗng',
            img: './assets/img/products/muong.jpg',
            category: 'Đồ gia dụng',
            price: 180000,
            desc: ''
        },
        {
            id: 46,
            status: 1, 
            title: 'Nồi cơm điện',
            img: './assets/img/products/noicom.jpg',
            category: 'Đồ gia dụng',
            price: 180000,
            desc: ''
        },
        {
            id: 47,
            status: 1, 
            title: 'Ghế Sofa',
            img: './assets/img/products/sofa.jpg',
            category: 'Đồ nội thất',
            price: 180000,
            desc: ''
        },
        {
            id: 48,
            status: 1, 
            title: 'Quạt điện',
            img: './assets/img/products/quat.jpg',
            category: 'Đồ gia dụng',
            price: 180000,
            desc: ''
        },
        {
            id: 49,
            status: 1, 
            title: 'Yamaha XSr155',
            img: './assets/img/products/xsr155.jpg',
            category: 'Xe',
            price: 180000,
            desc: 'Xe còn mới khoảng 80-90%, ít trầy xước, màu sơn còn bóng đẹp.'
        },
        {
            id: 50,
            status: 1, 
            title: 'Xe đạp',
            img: './assets/img/products/xedap.jpg',
            category: 'Xe',
            price: 180000,
            desc: 'Xe còn chắc chắn, khung xe không bị cong vênh, có thể có vài vết trầy xước nhỏ trên sơn.'
        },
        {
            id: 51,
            status: 1, 
            title: 'Xe đạp địa hình',
            img: './assets/img/products/xe.jpg',
            category: 'Xe',
            price: 180000,
            desc: 'Xe còn chắc chắn, khung xe không bị cong vênh, có thể có vài vết trầy xước nhỏ trên sơn.'
        },
        {
            id: 52,
            status: 1, 
            title: 'Tủ đồ',
            img: './assets/img/products/tudo.jpg',
            category: 'Đồ nội thất',
            price: 300000,
            desc: 'Tủ còn chắc chắn, cửa tủ và ngăn kéo hoạt động mượt, không bị kẹt. Có thể có vài vết xước nhẹ do sử dụng.'
        },
        {
            id: 53,
            status: 1, 
            title: 'Cây treo quần áo',
            img: './assets/img/products/treoquan.jpg',
            category: 'Đồ gia dụng',
            price: 180000,
            desc: 'Cây treo còn chắc chắn, không bị nghiêng hay gãy. Các móc treo còn nguyên vẹn, có thể có vài vết trầy nhẹ.'
        },
        ]
        localStorage.setItem('products', JSON.stringify(products));
    }
}

// Create admin account 
function createAdminAccount() {
    let accounts = localStorage.getItem("accounts");
    if (!accounts) {
        accounts = [];
        accounts.push({
            fullname: "Lương Thế Dũng",
            phone: "thedung2003",
            password: "123456",
            address: '21 Phước Hòa 5,Khuê Trung, Cẩm Lệ, Đà Nẵng',
            email: 'luongthedung2001@gmail.com',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        accounts.push({
            fullname: "Lương Thế Dũng",
            phone: "0123456789",
            password: "123456",
            address: '',
            email: '',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        localStorage.setItem('accounts', JSON.stringify(accounts));
    }
}

window.onload = createProduct();
window.onload = createAdminAccount();