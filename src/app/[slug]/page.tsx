'use client'
import { use } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Shield, Truck, Award, Heart, Phone, Mail, ShoppingCart, ArrowLeft, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const content = `
       <div class="product-description">
		<span class="product-page-block-title product-description-title">
			THÔNG TIN SẢN PHẨM		</span>
		<div class="product-description-content">
			<p><span style="font-weight: 400;">Từ lâu, <span style="color: #0000ff;"><a style="color: #0000ff;" href="https://yanyen.vn/">tổ yến thiên nhiên</a></span> đã được biết tới là thực phẩm thượng hạng giúp chăm sóc sức khỏe và sắc đẹp toàn diện. Tuy nhiên, chế biến yến sào sai cách cũng có thể làm mất đi giá trị dinh dưỡng trong sản phẩm. Vì vậy, để rút ngắn thời gian và đảm bảo trọn vẹn dưỡng chất trong yến sào, sản phẩm </span><b>yến tinh chế loại 1-2</b><span style="font-weight: 400;"> đã được ra đời. Vậy yến tinh chế loại 1 có gì khác biệt so với yến tinh chế loại 2? Nên mua yến cao cấp hay yến tiêu chuẩn? <span style="color: #000000;">Yến sào Ý An</span> sẽ giúp bạn tìm ra toàn bộ lời giải đáp cụ thể.</span></p>
<h2><b>Tìm hiểu về yến tinh chế loại 1-2</b></h2>
<p><b>Yến tinh chế loại 1-2 </b><span style="font-weight: 400;">đều thuộc dòng yến sào mang lại giá trị dinh dưỡng cao. Dưới đây là một số thông tin cụ thể để bạn hiểu rõ hơn về sản phẩm.</span></p>
<h3><b>Yến tinh chế loại 1 là gì?</b></h3>
<p><span style="font-weight: 400;">Yến tinh chế loại 1 là sản phẩm tổ yến thô đã được người thợ tiến hành làm sạch kỹ lưỡng. Từ khâu nhặt lông, loại bỏ bụi bẩn và tạp chất khác đều được thủ công 100%. Tuy nhiên, so với <span style="color: #0000ff;"><a style="color: #0000ff;" href="https://yanyen.vn/yen-rut-long-nguyen-to/">yến rút lông nguyên tổ</a></span> thì yến tinh chế loại 1 sẽ không được đẹp và đều nhưng hàm lượng dinh dưỡng thì vẫn đảm bảo giữ nguyên vẹn giá trị.</span></p>
<p><span style="font-weight: 400;">Trên thị trường hiện nay, yến tinh chế loại 1 còn được biết tới với tên gọi khác là yến tinh chế cao cấp. Để làm ra sản phẩm này cần phải tiến hành thu hoạch từ những nhà nuôi yến có ít nhất 10 năm tuổi đời. Vì hình thức ban đầu tổ yến không được đẹp nên người thợ sẽ tiến hành tạo hình lại sau khi tinh chế thủ công.</span></p>
<figure id="attachment_906" aria-describedby="caption-attachment-906" style="width: 768px" class="wp-caption aligncenter"><img decoding="async" class="size-full wp-image-906" src="https://yanyen.vn/wp-content/uploads/2021/12/yen-tinh-che-loai-1-2-1.jpg" alt="Yến Tinh Chế Loại 1 Là Tổ Yến Sào Đã Được Xử Lý Làm Sạch, Có Cả Sợi Ngắn Lẫn Sợi Dài Với Tỷ Lệ Sợi Ngắn Khá Ít, Đã Được Định Hình Lại Thành Hình Dáng Ban Đầu" width="768" height="768" title="Yến tinh chế sợi" srcset="https://yanyen.vn/wp-content/uploads/2021/12/yen-tinh-che-loai-1-2-1.jpg 768w, https://yanyen.vn/wp-content/uploads/2021/12/yen-tinh-che-loai-1-2-1-100x100.jpg 100w, https://yanyen.vn/wp-content/uploads/2021/12/yen-tinh-che-loai-1-2-1-300x300.jpg 300w, https://yanyen.vn/wp-content/uploads/2021/12/yen-tinh-che-loai-1-2-1-510x510.jpg 510w, https://yanyen.vn/wp-content/uploads/2021/12/yen-tinh-che-loai-1-2-1-150x150.jpg 150w, https://yanyen.vn/wp-content/uploads/2021/12/yen-tinh-che-loai-1-2-1-500x500.jpg 500w" sizes="(max-width: 768px) 100vw, 768px"><figcaption id="caption-attachment-906" class="wp-caption-text">Yến Tinh Chế Loại 1 Là Tổ Yến Sào Đã Được Xử Lý Làm Sạch, Có Cả Sợi Ngắn Lẫn Sợi Dài Với Tỷ Lệ Sợi Ngắn Khá Ít, Đã Được Định Hình Lại Thành Hình Dáng Ban Đầu</figcaption></figure>
<h3><b>Yến tinh chế loại 2 là gì?</b></h3>
<p><span style="font-weight: 400;">Yến tinh chế loại 2 còn được gọi là yến tinh chế tiêu chuẩn. Sản phẩm cũng được người dùng ưa chuộng sử dụng mặc dù hình thức thẩm mỹ có thể không xuất sắc như yến tinh chế loại 1 hoặc dòng yến rút lông nguyên tổ. Tuy nhiên, giá trị dinh dưỡng vốn có của yến sào tự nhiên vẫn được đảm bảo gần như nguyên vẹn.</span></p>
<p><span style="font-weight: 400;">Tổ yến tinh chế loại 2 cũng được tuyển chọn khá kỹ từ khâu thu hoạch yến. Phải là những nhà yến ít nhất 10 năm tuổi mới được chọn và lấy tổ yến thô đem về chế biến. Khâu tinh chế bao gồm việc nhặt lông, loại bỏ bụi bẩn và tạp chất được thủ công 100%. Tuy nhiên, so với yến tinh chế loại 1 thì thì sản phẩm yến tinh chế loại 2 sẽ có đôi chút khác biệt.</span></p>
<figure id="attachment_910" aria-describedby="caption-attachment-910" style="width: 750px" class="wp-caption aligncenter"><img decoding="async" class="wp-image-910" src="https://yanyen.vn/wp-content/uploads/2021/12/yen-tinh-che-loai-1-2-4.jpg" alt="Yến Tinh Chế Loại 2 Có Tỷ Lệ Sợi Dài : Sợi Ngắn Là 6:4" width="750" height="750" title="Yến tinh chế sợi" srcset="https://yanyen.vn/wp-content/uploads/2021/12/yen-tinh-che-loai-1-2-4.jpg 1080w, https://yanyen.vn/wp-content/uploads/2021/12/yen-tinh-che-loai-1-2-4-100x100.jpg 100w, https://yanyen.vn/wp-content/uploads/2021/12/yen-tinh-che-loai-1-2-4-300x300.jpg 300w, https://yanyen.vn/wp-content/uploads/2021/12/yen-tinh-che-loai-1-2-4-1024x1024.jpg 1024w, https://yanyen.vn/wp-content/uploads/2021/12/yen-tinh-che-loai-1-2-4-768x768.jpg 768w, https://yanyen.vn/wp-content/uploads/2021/12/yen-tinh-che-loai-1-2-4-510x510.jpg 510w" sizes="(max-width: 750px) 100vw, 750px"><figcaption id="caption-attachment-910" class="wp-caption-text">Yến Tinh Chế Loại 2 Có Tỷ Lệ Sợi Dài : Sợi Ngắn Là 6:4</figcaption></figure>
<p><span style="font-weight: 400;">Đánh giá chung: </span><b>Yến tinh chế loại 1 </b>và 2 <span style="font-weight: 400;">đều là những sản phẩm yến tự nhiên, không ngâm tẩm hóa chất, không độn và đã được làm sạch hoàn toàn lông cùng bụi bẩn, tạp chất. Do đó, giá trị dinh dưỡng và hương vị đặc trưng vẫn giữ được trọn vẹn. Khi mua, người dùng không cần phải mất công làm sạch lần nữa như yến rút lông nguyên tổ mà chỉ cần ngâm nước rồi chế biến thành món mình thích.</span></p>
<blockquote><p><strong>TƯ VẤN: <span style="color: #0000ff;"><a style="color: #0000ff;" href="https://yanyen.vn/tu-van-nen-mua-yen-tho-hay-yen-tinh-che-tot-hon/">Nên mua yến thô hay yến tinh chế</a></span></strong></p></blockquote>
<h2><b>Yến tinh chế loại 1 và loại 2 khác nhau ở điểm nào?</b></h2>
<p><span style="font-weight: 400;">Trên thị trường hiện nay đang phân phối song song 2 dòng sản phẩm yến tinh chế loại 1 và yến tinh chế loại 2. Bạn cần phải phân biệt được giữa 2 loại yến này có sự khác biệt như thế nào để tránh mua nhầm, tốn kém chi phí.</span></p>
<p><span style="font-weight: 400;">Dễ thấy, yến tinh chế loại 1 sẽ có sợi yến dài hơn. Khi quan sát, bạn sẽ thấy sợi phồng, trắng và có độ bóng ánh kim. Khi ngửi vẫn cảm nhận rõ rệt mùi vị hơi tanh đặc trưng của yến tự nhiên, không ngâm tẩm hóa chất.</span></p>
<p><span style="font-weight: 400;">Còn yến tinh chế loại 2 sẽ có sợi yến ngắn hơn. Tỷ lệ yến sợi và yến vụn sẽ rơi vào khoảng 4:6. Khi quan sát, sợi yến cũng có độ phồng nhất định với màu trắng tự nhiên. Khi ngửi thì bạn vẫn cảm nhận được mùi hương đặc trưng của tổ yến tự nhiên mà không phải mùi hương liệu, hóa chất hay bảo quản.</span></p>
<figure id="attachment_907" aria-describedby="caption-attachment-907" style="width: 768px" class="wp-caption aligncenter"><img decoding="async" class="size-full wp-image-907" src="https://yanyen.vn/wp-content/uploads/2021/12/yen-tinh-che-loai-1-2-2.jpg" alt="Yến Tinh Chế Loại 1-2 Khác Nhau Chủ Yếu Ở Sợi Yến Dài Hay Ngắn, Tỷ Lệ Thế Nào" width="768" height="768" title="Yến tinh chế sợi" srcset="https://yanyen.vn/wp-content/uploads/2021/12/yen-tinh-che-loai-1-2-2.jpg 768w, https://yanyen.vn/wp-content/uploads/2021/12/yen-tinh-che-loai-1-2-2-100x100.jpg 100w, https://yanyen.vn/wp-content/uploads/2021/12/yen-tinh-che-loai-1-2-2-300x300.jpg 300w, https://yanyen.vn/wp-content/uploads/2021/12/yen-tinh-che-loai-1-2-2-510x510.jpg 510w, https://yanyen.vn/wp-content/uploads/2021/12/yen-tinh-che-loai-1-2-2-150x150.jpg 150w, https://yanyen.vn/wp-content/uploads/2021/12/yen-tinh-che-loai-1-2-2-500x500.jpg 500w" sizes="(max-width: 768px) 100vw, 768px"><figcaption id="caption-attachment-907" class="wp-caption-text">Yến Tinh Chế Loại 1-2 Khác Nhau Chủ Yếu Ở Sợi Yến Dài Hay Ngắn, Tỷ Lệ Thế Nào</figcaption></figure>
<h2><b>Giá yến tinh chế loại 1 và loại 2 mới nhất 2022</b></h2>
<p><span style="font-weight: 400;">Do khâu tuyển chọn tổ yến trước khi bắt đầu làm sạch có sự khác biệt nên giá </span><b>yến tinh chế loại 1-2</b><span style="font-weight: 400;"> cũng có sự chênh lệch nhất định. Thường yến tinh chế cao cấp sẽ có giá cao hơn so với yến tinh chế tiêu chuẩn vì người thợ sẽ phải tốn nhiều công sức để đắp lại thành tổ và sử dụng sợi yến dài nhiều hơn.</span></p>
<p><span style="font-weight: 400;">Yến tinh chế cao cấp – yến tinh chế loại 1 được thu hoạch từ những nhà nuôi yến có trên 10 năm tuổi đời. Tỷ lệ tuyển chọn là 10 tổ chọn 3. Tổ yến tinh chế có sợi dài và được sơ chế với phương pháp nhặt ướt. Giá yến tinh chế cao cấp khoảng 2.200.000 VNĐ – 4.400.000 VNĐ.</span></p>
<p><span style="font-weight: 400;">Yến tinh chế tiêu chuẩn – yến tinh chế loại 2 được thu hoạch từ những gia đình nuôi yến hơn 10 năm tuổi. Tỷ lệ chọn là 10 tổ chọn 3 và tỷ lệ yến sợi : yến vụn sẽ khoảng 4:6. Giá yến tinh chế tiêu chuẩn khoảng 1.750.000 VNĐ – 3.500.000 VNĐ.</span></p>
<figure id="attachment_908" aria-describedby="caption-attachment-908" style="width: 750px" class="wp-caption aligncenter"><img decoding="async" class="wp-image-908" src="https://yanyen.vn/wp-content/uploads/2021/12/yen-tinh-che-loai-1-2-3.jpg" alt="Giá Yến Tinh Chế Loại 1 Thường Cao Hơn So Với Giá Yến Tinh Chế Loại 2" width="750" height="750" title="Yến tinh chế sợi" srcset="https://yanyen.vn/wp-content/uploads/2021/12/yen-tinh-che-loai-1-2-3.jpg 1080w, https://yanyen.vn/wp-content/uploads/2021/12/yen-tinh-che-loai-1-2-3-100x100.jpg 100w, https://yanyen.vn/wp-content/uploads/2021/12/yen-tinh-che-loai-1-2-3-300x300.jpg 300w, https://yanyen.vn/wp-content/uploads/2021/12/yen-tinh-che-loai-1-2-3-1024x1024.jpg 1024w, https://yanyen.vn/wp-content/uploads/2021/12/yen-tinh-che-loai-1-2-3-768x768.jpg 768w, https://yanyen.vn/wp-content/uploads/2021/12/yen-tinh-che-loai-1-2-3-510x510.jpg 510w" sizes="(max-width: 750px) 100vw, 750px"><figcaption id="caption-attachment-908" class="wp-caption-text">Giá Yến Tinh Chế Loại 1 Thường Cao Hơn So Với Giá Yến Tinh Chế Loại 2</figcaption></figure>
<h2><b>&nbsp;Ý An – Địa chỉ uy tín mua yến tinh chế loại 1-2 chất lượng</b></h2>
<p><span style="font-weight: 400;">Nhu cầu sử dụng tổ yến để tẩm bổ sức khỏe của người dùng ngày cao cao đã khiến thị trường yến sào xuất hiện tràn lan hàng kém chất lượng. Không những không đảm bảo nguyên chất tổ yến thiên nhiên mà còn can thiệp hóa chất tẩy trắng, độn thêm thành phần khác,…</span></p>
<p><span style="font-weight: 400;">Trong khi đó, dòng yến tinh chế đã qua xử lý của người thợ nên việc độn sản phẩm càng trở nên dễ dàng hơn so với yến rút lông nguyên tổ. Vì thế, bạn cần phải là người tiêu dùng thông thái để phân biệt được đâu mới là yến nguyên chất. Bên cạnh đó, việc tìm đến địa chỉ mua </span><b>yến tinh chế loại 1-2</b><span style="font-weight: 400;"> chất lượng cũng là điều vô cùng quan trọng.</span></p>
<p><span style="font-weight: 400;">Bạn có thể tham khảo mua yến tinh chế cao cấp tại Ý An để được đảm bảo về chất lượng sản phẩm. Ý An cam kết chỉ mang tới những hộp yến sào nguyên chất thượng hạng, không độn hay ngâm tẩm hóa chất độc hại. Nếu phát giác bất cứ vấn đề nào, bạn hoàn toàn có thể khiếu nại và đổi trả.</span></p>
<p><span style="font-weight: 400;">Sử dụng </span><b>yến tinh chế loại 1-2</b><span style="font-weight: 400;"> sẽ giúp cải thiện sức khỏe và sắc đẹp của bạn tốt lên mỗi ngày. Để luôn vững tâm và mua được yến sào chất lượng với giá rẻ, bạn hãy liên hệ với Ý An để được tư vấn thêm.</span></p>
<p>Nếu bạn muốn được tư vấn hoặc tìm hiểu thêm về các sản phẩm yến sào tại&nbsp;<a href="https://yanyen.vn/"><b>Yến sào Ý An</b></a>, đừng ngần ngại liên hệ qua:</p>
<ul>
<li aria-level="1"><b>Website</b>:&nbsp;<a href="https://www.yanyen.vn/">www.yanyen.vn</a></li>
<li aria-level="1"><strong>Facebook:</strong>&nbsp;<a href="https://www.facebook.com/yanyen.m" target="_blank" rel="nofollow noopener">Yến Sào Ý An</a></li>
<li aria-level="1"><b>Chi nhánh Hà Nội</b>:</li>
<li aria-level="1">33 Đặng Văn Ngữ, Trung Tự, Đống Đa</li>
<li aria-level="1">29 Minh Khai, Minh Khai, Hai Bà Trưng –&nbsp;<b>Hotline</b>: 039 355 6866</li>
<li aria-level="1"><b>Chi nhánh TP. HCM</b>: 295 Lý Thái Tổ, P. 9, Q. 10 –&nbsp;<b>Hotline</b>: 090 416 9989</li>
</ul>
		</div>
	</div>
      `
    const listDetailProduct = [
        {
            id: 1,
            name: "Yến sào cao cấp Nha Trang",
            price: 2500000,
            originalPrice: 3500000,
            image: "/images/products/3.jpg",
            images: [
                "/images/products/3.jpg",
                "/images/products/1.jpg",
                "/images/products/2.jpg",
                "/images/products/4.jpg"
            ],
            description: "Yến sào nguyên tổ cao cấp từ Nha Trang, giữ nguyên hình dạng tự nhiên với chất lượng vượt trội",
            weight: "100g",
            moisture: 15,
            storage: 24,
            origin: "Nha Trang - Khánh Hòa",
            packaging: "Hộp nhựa mica trong",
            warranty: "1 đổi 1",
            badge: "Bán chạy nhất",
            rating: 4.9,
            reviewCount: 127,
            inStock: true,
            content
        },
        {
            id: 2,
            name: "Yến sào chưng sẵn cao cấp",
            price: 1800000,
            originalPrice: 2200000,
            image: "/images/products/2.jpg",
            images: [
                "/images/products/2.jpg",
                "/images/products/1.jpg",
                "/images/products/3.jpg"
            ],
            description: "Yến sào đã chế biến sẵn, tiện lợi sử dụng ngay",
            weight: "6 lọ x 70ml",
            moisture: 12,
            storage: 18,
            origin: "Nha Trang - Khánh Hòa",
            packaging: "Lọ thủy tinh",
            warranty: "1 đổi 1",
            badge: "Tiện lợi",
            rating: 4.7,
            reviewCount: 85,
            inStock: true,
            content
        },
        {
            id: 3,
            name: "Yến sào chưng sẵn cao cấp",
            price: 1800000,
            originalPrice: 2200000,
            image: "/images/products/2.jpg",
            images: [
                "/images/products/2.jpg",
                "/images/products/1.jpg",
                "/images/products/3.jpg"
            ],
            description: "Yến sào đã chế biến sẵn, tiện lợi sử dụng ngay",
            weight: "6 lọ x 70ml",
            moisture: 12,
            storage: 18,
            origin: "Nha Trang - Khánh Hòa",
            packaging: "Lọ thủy tinh",
            warranty: "1 đổi 1",
            badge: "Tiện lợi",
            rating: 4.7,
            reviewCount: 85,
            inStock: true,
            content
        }, {
            id: 4,
            name: "Yến sào chưng sẵn cao cấp",
            price: 1800000,
            originalPrice: 2200000,
            image: "/images/products/2.jpg",
            images: [
                "/images/products/2.jpg",
                "/images/products/1.jpg",
                "/images/products/3.jpg"
            ],
            description: "Yến sào đã chế biến sẵn, tiện lợi sử dụng ngay",
            weight: "6 lọ x 70ml",
            moisture: 12,
            storage: 18,
            origin: "Nha Trang - Khánh Hòa",
            packaging: "Lọ thủy tinh",
            warranty: "1 đổi 1",
            badge: "Tiện lợi",
            rating: 4.7,
            reviewCount: 85,
            inStock: true,
            content
        },
        {
            id: 5,
            name: "Yến sào chưng sẵn cao cấp",
            price: 1800000,
            originalPrice: 2200000,
            image: "/images/products/2.jpg",
            images: [
                "/images/products/2.jpg",
                "/images/products/1.jpg",
                "/images/products/3.jpg"
            ],
            description: "Yến sào đã chế biến sẵn, tiện lợi sử dụng ngay",
            weight: "6 lọ x 70ml",
            moisture: 12,
            storage: 18,
            origin: "Nha Trang - Khánh Hòa",
            packaging: "Lọ thủy tinh",
            warranty: "1 đổi 1",
            badge: "Tiện lợi",
            rating: 4.7,
            reviewCount: 85,
            inStock: true,
            content
        },
        {
            id: 6,
            name: "Yến sào chưng sẵn cao cấp",
            price: 1800000,
            originalPrice: 2200000,
            image: "/images/products/2.jpg",
            images: [
                "/images/products/2.jpg",
                "/images/products/1.jpg",
                "/images/products/3.jpg"
            ],
            description: "Yến sào đã chế biến sẵn, tiện lợi sử dụng ngay",
            weight: "6 lọ x 70ml",
            moisture: 12,
            storage: 18,
            origin: "Nha Trang - Khánh Hòa",
            packaging: "Lọ thủy tinh",
            warranty: "1 đổi 1",
            badge: "Tiện lợi",
            rating: 4.7,
            reviewCount: 85,
            inStock: true,
            content
        }
    ];

    const product = listDetailProduct.find((product) => product.id === parseInt(slug));

    if (!product) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 flex items-center justify-center">
                <Card className="max-w-md mx-auto text-center">
                    <CardContent className="pt-6">
                        <h2 className="text-2xl font-bold mb-4">Sản phẩm không tồn tại</h2>
                        <p className="text-gray-600 mb-6">Không tìm thấy sản phẩm bạn đang tìm kiếm.</p>
                        <Link href="/">
                            <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Quay về trang chủ
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
            <Header />

            {/* Breadcrumb and actions bar */}
            <div className="border-b border-amber-100 bg-white/80 backdrop-blur">
                <div className="container mx-auto px-4 md:px-6 py-4 max-w-7xl">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <Link href="/" className="hover:text-amber-600 transition-colors">
                                Trang chủ
                            </Link>
                            <span>/</span>
                            <Link href="/#products" className="hover:text-amber-600 transition-colors">
                                Sản phẩm
                            </Link>
                            <span>/</span>
                            <span className="text-gray-900 font-medium">{product.name}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm" className="border-amber-300 text-amber-700 hover:bg-amber-50">
                                <Share2 className="h-4 w-4 mr-2" />
                                Chia sẻ
                            </Button>
                            <Button variant="outline" size="sm" className="border-amber-300 text-amber-700 hover:bg-amber-50">
                                <Heart className="h-4 w-4 mr-2" />
                                Yêu thích
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 py-8 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Product Images */}
                    <div className="space-y-4">
                        <div className="aspect-square relative overflow-hidden rounded-2xl bg-white shadow-lg">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover transition-transform hover:scale-105"
                                priority
                            />
                            {product.badge && (
                                <Badge className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-500 text-white border-0">
                                    {product.badge}
                                </Badge>
                            )}
                        </div>

                        {/* Thumbnail gallery */}
                        <div className="grid grid-cols-4 gap-3">
                            {product.images?.map((img, index) => (
                                <div key={index} className="aspect-square relative overflow-hidden rounded-lg bg-white shadow-md cursor-pointer hover:shadow-lg transition-shadow">
                                    <Image
                                        src={img}
                                        alt={`${product.name} ${index + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                                {product.name}
                            </h1>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {product.description}
                            </p>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center space-x-2">
                            <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                                ))}
                            </div>
                            <span className="text-lg font-semibold">{product.rating}</span>
                            <span className="text-gray-500">({product.reviewCount} đánh giá)</span>
                        </div>

                        {/* Price */}
                        <div className="space-y-2">
                            <div className="flex items-center space-x-4">
                                <span className="text-3xl font-bold text-red-600">
                                    {product.price.toLocaleString('vi-VN')}đ
                                </span>
                                {product.originalPrice && (
                                    <span className="text-xl text-gray-500 line-through">
                                        {product.originalPrice.toLocaleString('vi-VN')}đ
                                    </span>
                                )}
                            </div>
                            {product.originalPrice && (
                                <Badge variant="destructive" className="text-sm">
                                    Tiết kiệm {((product.originalPrice - product.price) / product.originalPrice * 100).toFixed(0)}%
                                </Badge>
                            )}
                        </div>

                        {/* Specifications */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Thông số kỹ thuật</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Trọng lượng:</span>
                                        <span className="font-medium">{product.weight}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Độ ẩm:</span>
                                        <span className="font-medium">≤ {product.moisture}%</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Bảo quản:</span>
                                        <span className="font-medium">{product.storage} tháng</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Xuất xứ:</span>
                                        <span className="font-medium">{product.origin}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Đóng gói:</span>
                                        <span className="font-medium">{product.packaging}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Bảo hành:</span>
                                        <span className="font-medium">{product.warranty}</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Action Buttons */}
                        <div className="space-y-4">
                            <div className="flex space-x-3">
                                <Button
                                    size="lg"
                                    className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 h-12 text-base font-semibold"
                                >
                                    <ShoppingCart className="mr-2 h-5 w-5" />
                                    Thêm vào giỏ hàng
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="h-12 px-6 border-amber-300 text-amber-700 hover:bg-amber-50"
                                >
                                    Mua ngay
                                </Button>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <Button variant="outline" className="flex items-center justify-center">
                                    <Phone className="mr-2 h-4 w-4" />
                                    Gọi tư vấn
                                </Button>
                                <Button variant="outline" className="flex items-center justify-center">
                                    <Mail className="mr-2 h-4 w-4" />
                                    Chat ngay
                                </Button>
                            </div>
                        </div>

                        {/* Trust badges */}
                        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                            <div className="text-center">
                                <Shield className="h-8 w-8 mx-auto text-green-600 mb-2" />
                                <p className="text-sm text-gray-600">Chất lượng đảm bảo</p>
                            </div>
                            <div className="text-center">
                                <Truck className="h-8 w-8 mx-auto text-blue-600 mb-2" />
                                <p className="text-sm text-gray-600">Giao hàng nhanh</p>
                            </div>
                            <div className="text-center">
                                <Award className="h-8 w-8 mx-auto text-purple-600 mb-2" />
                                <p className="text-sm text-gray-600">Sản phẩm cao cấp</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product Content */}
                <div className="mt-12">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl">Mô tả chi tiết sản phẩm</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div
                                className="prose prose-lg max-w-none prose-headings:text-amber-700 prose-a:text-amber-600"
                                dangerouslySetInnerHTML={{ __html: product.content }}
                            />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}