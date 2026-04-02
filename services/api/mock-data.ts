import type {
  BlogPost,
  GuideItem,
  LegalDocument,
  Precedent,
  TemplateItem
} from "@/services/api/types";

export const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    slug: "huong-dan-ap-dung-nghi-dinh-moi-ve-dat-dai",
    title: "Hướng dẫn áp dụng nghị định mới về đất đai trong giao dịch dân sự",
    excerpt:
      "Tổng hợp các điểm cần rà soát khi nghị định mới tác động đến hợp đồng chuyển nhượng và thủ tục đăng ký.",
    content:
      "<p>Nghị định mới về đất đai làm thay đổi đáng kể quy trình rà soát hồ sơ, đặc biệt ở khâu kiểm tra nguồn gốc sử dụng và nghĩa vụ tài chính. Doanh nghiệp và cá nhân nên đối chiếu lại điều khoản về điều kiện chuyển nhượng, thời điểm bàn giao và cơ chế xử lý khi phát sinh chậm trễ từ phía cơ quan đăng ký.</p><p>Trong thực tiễn, rủi ro thường phát sinh ở việc áp dụng biểu mẫu cũ, thiếu phụ lục chứng minh quyền đại diện hoặc chưa cập nhật mốc thời gian nộp hồ sơ điện tử. Việc chuẩn hóa checklist trước khi nộp hồ sơ sẽ giúp hạn chế bị trả lại và giảm chi phí giao dịch.</p>",
    category: "Đất đai",
    author: "Ban biên tập ANL Counsel",
    publishedAt: "2026-03-26T08:00:00.000Z",
    updatedAt: "2026-03-27T08:00:00.000Z",
    readingTime: 6,
    coverImage: "/hero-law.svg",
    seoTitle: "Hướng dẫn áp dụng nghị định mới về đất đai",
    seoDescription:
      "Phân tích nhanh các điểm cần rà soát khi nghị định mới về đất đai ảnh hưởng đến hợp đồng và thủ tục đăng ký."
  },
  {
    id: "blog-2",
    slug: "mau-dieu-khoan-phat-vi-pham-trong-hop-dong-thuong-mai",
    title: "Mẫu điều khoản phạt vi phạm trong hợp đồng thương mại cần lưu ý gì?",
    excerpt:
      "Cách xây dựng điều khoản phạt vi phạm và bồi thường để tăng khả năng thực thi trong tranh chấp thương mại.",
    content:
      "<p>Điều khoản phạt vi phạm không chỉ là mức phần trăm. Doanh nghiệp cần xác định rõ nghĩa vụ bị vi phạm, thời điểm phát sinh, bằng chứng xác lập thiệt hại và mối quan hệ với điều khoản bồi thường. Một điều khoản thiếu logic rất dễ bị vô hiệu từng phần trong quá trình giải quyết tranh chấp.</p><p>Thực tiễn xét xử cho thấy những điều khoản có cấu trúc rõ ràng, giới hạn nghĩa vụ chứng minh và phân tách trách nhiệm giữa các bên thường được tòa án hoặc trọng tài chấp nhận thuận lợi hơn.</p>",
    category: "Kinh doanh – Thương mại",
    author: "Luật sư Nguyễn An",
    publishedAt: "2026-03-22T08:00:00.000Z",
    readingTime: 5,
    coverImage: "/hero-law.svg"
  },
  {
    id: "blog-3",
    slug: "5-rui-ro-phap-ly-khi-ly-hon-co-yeu-to-tai-san-chung",
    title: "5 rủi ro pháp lý khi ly hôn có yếu tố tài sản chung",
    excerpt:
      "Những vướng mắc thường gặp khi xác định tài sản riêng, công sức đóng góp và nghĩa vụ tài chính phát sinh.",
    content:
      "<p>Trong tranh chấp ly hôn, việc xác định tài sản chung thường không dừng ở giấy chứng nhận sở hữu. Dòng tiền hình thành tài sản, nguồn gốc thừa kế riêng và chứng cứ về công sức đóng góp đều có thể làm thay đổi kết quả phân chia.</p><p>Để bảo vệ quyền lợi, các bên nên chuẩn bị hồ sơ chứng minh nguồn tiền, thời điểm tạo lập tài sản và các thỏa thuận nội bộ nếu có.</p>",
    category: "Hôn nhân & Gia đình",
    author: "Ban nghiên cứu",
    publishedAt: "2026-03-18T08:00:00.000Z",
    readingTime: 4,
    coverImage: "/hero-law.svg"
  },
  {
    id: "blog-4",
    slug: "dinh-huong-ap-dung-an-le-moi-trong-tranh-chap-hop-dong",
    title: "Định hướng áp dụng án lệ mới trong tranh chấp hợp đồng",
    excerpt:
      "Một số cách tiếp cận khi viện dẫn án lệ để củng cố lập luận về hiệu lực và giải thích hợp đồng.",
    content:
      "<p>Án lệ có giá trị đặc biệt khi điều khoản hợp đồng chưa đủ rõ hoặc có khoảng trống trong quy định áp dụng. Việc lựa chọn đúng ratio decidendi và đối chiếu các tình tiết tương đồng là điều kiện tiên quyết để tăng sức nặng cho lập luận.</p>",
    category: "Dân sự",
    author: "Luật sư Trần Linh",
    publishedAt: "2026-03-14T08:00:00.000Z",
    readingTime: 5,
    coverImage: "/hero-law.svg"
  },
  {
    id: "blog-5",
    slug: "ra-soat-nghia-vu-tuan-thu-trong-doanh-nghiep-co-von-dau-tu",
    title: "Rà soát nghĩa vụ tuân thủ trong doanh nghiệp có vốn đầu tư nước ngoài",
    excerpt:
      "Checklist pháp lý dành cho doanh nghiệp FDI khi cập nhật giấy phép và thay đổi mô hình hoạt động.",
    content:
      "<p>Doanh nghiệp có vốn đầu tư nước ngoài thường phát sinh rủi ro khi thay đổi ngành nghề, tăng vốn hoặc tái cấu trúc mà chưa đồng bộ giữa giấy chứng nhận đăng ký đầu tư và đăng ký doanh nghiệp. Việc rà soát định kỳ sẽ giúp tránh khoảng trống tuân thủ.</p>",
    category: "Kinh doanh – Thương mại",
    author: "Ban biên tập ANL Counsel",
    publishedAt: "2026-03-10T08:00:00.000Z",
    readingTime: 7,
    coverImage: "/hero-law.svg"
  },
  {
    id: "blog-6",
    slug: "quyen-im-lang-trong-to-tung-hinh-su-va-thuc-tien-bao-chua",
    title: "Quyền im lặng trong tố tụng hình sự và thực tiễn bào chữa",
    excerpt:
      "Góc nhìn thực tiễn về phạm vi áp dụng quyền im lặng và cách luật sư bảo vệ quyền lợi thân chủ.",
    content:
      "<p>Quyền im lặng là một phần của quyền bào chữa và cần được nhìn nhận cùng với quyền có luật sư, quyền tiếp cận hồ sơ ở từng giai đoạn tố tụng và nguyên tắc suy đoán vô tội. Trong thực tiễn, việc ghi nhận đầy đủ ý kiến của bị can, bị cáo vẫn cần được theo dõi chặt chẽ.</p>",
    category: "Hình sự",
    author: "Luật sư Lê Khánh",
    publishedAt: "2026-03-08T08:00:00.000Z",
    readingTime: 6,
    coverImage: "/hero-law.svg"
  }
];

export const legalDocuments: LegalDocument[] = [
  {
    id: "vb-2026-15",
    title: "Nghị định hướng dẫn thi hành một số điều của Luật Đất đai",
    summary:
      "Bản tổng hợp điều khoản đáng chú ý liên quan đến chuyển nhượng, đăng ký biến động và nghĩa vụ tài chính.",
    body:
      "<p>Văn bản quy định chi tiết về hồ sơ, trình tự, thời hạn xử lý và phạm vi áp dụng đối với từng nhóm giao dịch đất đai. Điểm mới đáng chú ý nằm ở cơ chế tiếp nhận hồ sơ điện tử và trách nhiệm phối hợp liên thông.</p>",
    category: "Đất đai",
    referenceNumber: "15/2026/NĐ-CP",
    issuedAt: "2026-03-20T08:00:00.000Z",
    status: "Có hiệu lực",
    tags: ["Đất đai", "Chuyển nhượng", "Đăng ký biến động"]
  },
  {
    id: "vb-2026-08",
    title: "Thông tư về biểu mẫu đăng ký doanh nghiệp sửa đổi",
    summary:
      "Cập nhật hệ thống biểu mẫu hồ sơ đăng ký doanh nghiệp, thay đổi nội dung đăng ký và công bố thông tin.",
    body:
      "<p>Thông tư điều chỉnh cấu trúc của nhiều biểu mẫu hành chính, bổ sung dữ liệu bắt buộc về chủ sở hữu hưởng lợi và cơ chế nộp hồ sơ điện tử. Doanh nghiệp cần đồng bộ biểu mẫu nội bộ và quy trình ký số.</p>",
    category: "Kinh doanh – Thương mại",
    referenceNumber: "08/2026/TT-BKHĐT",
    issuedAt: "2026-03-11T08:00:00.000Z",
    status: "Có hiệu lực",
    tags: ["Doanh nghiệp", "Biểu mẫu", "Hồ sơ điện tử"]
  },
  {
    id: "vb-2026-04",
    title: "Nghị quyết hướng dẫn giải quyết tranh chấp hôn nhân và gia đình",
    summary:
      "Định hướng áp dụng trong việc xác định tài sản chung, cấp dưỡng và quyền nuôi con.",
    body:
      "<p>Nghị quyết tổng hợp nhiều tình huống phát sinh trong thực tiễn xét xử, đặc biệt là tranh chấp liên quan đến tài sản hình thành trong thời kỳ hôn nhân và nghĩa vụ cấp dưỡng sau ly hôn.</p>",
    category: "Hôn nhân & Gia đình",
    referenceNumber: "04/2026/NQ-HĐTP",
    issuedAt: "2026-02-28T08:00:00.000Z",
    status: "Có hiệu lực",
    tags: ["Ly hôn", "Nuôi con", "Tài sản chung"]
  },
  {
    id: "vb-2026-01",
    title: "Thông tư liên tịch về phối hợp trong tố tụng hình sự",
    summary:
      "Quy định cơ chế phối hợp giữa các cơ quan tiến hành tố tụng trong giai đoạn điều tra và truy tố.",
    body:
      "<p>Thông tư liên tịch nhấn mạnh trách nhiệm cung cấp, chuyển giao và kiểm tra chứng cứ giữa các cơ quan tiến hành tố tụng, đồng thời quy định rõ thời hạn phối hợp xử lý.</p>",
    category: "Hình sự",
    referenceNumber: "01/2026/TTLT",
    issuedAt: "2026-01-15T08:00:00.000Z",
    status: "Có hiệu lực",
    tags: ["Tố tụng", "Điều tra", "Truy tố"]
  }
];

export const precedents: Precedent[] = [
  {
    id: "al-58",
    title: "Án lệ số 58 về xác định hiệu lực của thỏa thuận đặt cọc",
    summary:
      "Làm rõ tiêu chí phân biệt thỏa thuận đặt cọc với hợp đồng chuyển nhượng và hậu quả pháp lý khi vi phạm.",
    body:
      "<p>Án lệ khẳng định việc xác định đúng bản chất giao dịch phải căn cứ vào toàn bộ nội dung cam kết, phương thức thanh toán và mục đích của các bên, không chỉ dựa vào tên gọi của văn bản.</p>",
    category: "Dân sự",
    court: "Hội đồng Thẩm phán TANDTC",
    decisionDate: "2026-03-05T08:00:00.000Z",
    keywordTags: ["Đặt cọc", "Hiệu lực", "Hợp đồng"]
  },
  {
    id: "al-54",
    title: "Án lệ số 54 về bồi thường thiệt hại do vi phạm nghĩa vụ bảo mật",
    summary:
      "Đưa ra cách tiếp cận đối với nghĩa vụ chứng minh thiệt hại trong tranh chấp thương mại.",
    body:
      "<p>Án lệ nhấn mạnh giá trị của dữ liệu nội bộ, thông tin bí mật kinh doanh và khả năng áp dụng cơ chế bồi thường ước tính khi bên bị vi phạm không thể chứng minh toàn bộ thiệt hại trực tiếp.</p>",
    category: "Kinh doanh – Thương mại",
    court: "Hội đồng Thẩm phán TANDTC",
    decisionDate: "2026-02-17T08:00:00.000Z",
    keywordTags: ["Bảo mật", "Thương mại", "Bồi thường"]
  },
  {
    id: "al-49",
    title: "Án lệ số 49 về chia tài sản khi ly hôn có nguồn gốc riêng",
    summary:
      "Làm rõ căn cứ chứng minh tài sản riêng và nghĩa vụ chứng minh của từng bên trong quá trình giải quyết tranh chấp.",
    body:
      "<p>Án lệ chỉ ra rằng việc một tài sản được tạo lập trong thời kỳ hôn nhân không mặc nhiên làm mất đi nguồn gốc riêng nếu có chứng cứ rõ ràng về dòng tiền và ý chí của người sở hữu.</p>",
    category: "Hôn nhân & Gia đình",
    court: "TAND Cấp cao tại Hà Nội",
    decisionDate: "2026-01-29T08:00:00.000Z",
    keywordTags: ["Ly hôn", "Tài sản riêng", "Chứng cứ"]
  }
];

export const guideItems: GuideItem[] = [
  {
    id: "guide-1",
    title: "Quy trình rà soát hợp đồng thương mại trước khi ký",
    summary:
      "Checklist thực tiễn giúp doanh nghiệp kiểm tra điều khoản thanh toán, bảo mật, phạt vi phạm và giải quyết tranh chấp.",
    category: "Kinh doanh – Thương mại",
    href: "/huong-dan"
  },
  {
    id: "guide-2",
    title: "Các bước chuẩn bị hồ sơ khi tranh chấp đất đai",
    summary:
      "Danh mục giấy tờ và lưu ý về chứng cứ thường bị thiếu trong hồ sơ tranh chấp.",
    category: "Đất đai",
    href: "/huong-dan"
  },
  {
    id: "guide-3",
    title: "Hướng dẫn làm việc với cơ quan điều tra có luật sư tham gia",
    summary:
      "Những nguyên tắc cần bảo đảm để quyền bào chữa được thực hiện đầy đủ.",
    category: "Hình sự",
    href: "/huong-dan"
  }
];

export const templateItems: TemplateItem[] = [
  {
    id: "tpl-1",
    title: "Biên bản đối chiếu công nợ",
    summary: "Mẫu dùng cho doanh nghiệp trong quá trình xác nhận nghĩa vụ thanh toán.",
    category: "Kinh doanh – Thương mại",
    href: "/bieu-mau"
  },
  {
    id: "tpl-2",
    title: "Đơn yêu cầu cung cấp thông tin đất đai",
    summary: "Biểu mẫu phục vụ việc kiểm tra thông tin thửa đất và tình trạng pháp lý.",
    category: "Đất đai",
    href: "/bieu-mau"
  },
  {
    id: "tpl-3",
    title: "Đơn đề nghị thay đổi người trực tiếp nuôi con",
    summary: "Mẫu tham khảo dành cho các tình huống thay đổi hoàn cảnh sau ly hôn.",
    category: "Hôn nhân & Gia đình",
    href: "/bieu-mau"
  }
];

