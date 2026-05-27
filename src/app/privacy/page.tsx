import { SiteShell } from "@/components/site-shell";

export default function PrivacyPage() {
  return (
    <SiteShell title="Chính sách Quyền riêng tư" description="Ứng dụng Drino - Quản lý Bảo dưỡng Xe">
      <div className="space-y-6">
        <header>
          <h1 className="text-2xl font-semibold">Chính sách Quyền riêng tư</h1>
          <p className="text-sm text-muted">Ứng dụng Drino - Quản lý Bảo dưỡng Xe</p>
          <p className="text-sm text-muted">Cập nhật lần cuối: 14 tháng 1, 2026</p>
        </header>

        <section className="glass-panel rounded-[1rem] p-6">
          <h2 className="text-lg font-semibold">1. Giới thiệu</h2>
          <p className="mt-3 text-sm text-muted">Chào mừng bạn đến với Drino! Chúng tôi cam kết bảo vệ quyền riêng tư và dữ liệu cá nhân của bạn. Chính sách quyền riêng tư này giải thích cách chúng tôi thu thập, sử dụng, và bảo vệ thông tin của bạn khi sử dụng ứng dụng Drino.</p>
          <p className="mt-2 text-sm text-muted">Bằng cách sử dụng ứng dụng Drino, bạn đồng ý với các điều khoản được mô tả trong chính sách này.</p>
        </section>

        <section className="glass-panel rounded-[1rem] p-6">
          <h2 className="text-lg font-semibold">2. Thông tin Chúng tôi Thu thập</h2>

          <h3 className="mt-3 font-semibold">2.1. Thông tin bạn cung cấp</h3>
          <div className="mt-2 text-sm text-muted space-y-1">
            <p><strong>Thông tin xe:</strong> Thông tin về xe của bạn (biển số, hãng xe, model, năm sản xuất)</p>
            <p><strong>Lịch sử bảo dưỡng:</strong> Thông tin về các lần bảo dưỡng, sửa chữa (ngày, loại dịch vụ, chi phí, ghi chú)</p>
            <p><strong>Nhắc nhở:</strong> Các nhắc nhở bảo dưỡng định kỳ mà bạn thiết lập</p>
            <p><strong>Hình ảnh:</strong> Ảnh chụp xe, hóa đơn, hoặc các tài liệu liên quan (nếu bạn tải lên)</p>
          </div>

          <h3 className="mt-4 font-semibold">2.2. Thông tin tự động thu thập</h3>
          <div className="mt-2 text-sm text-muted space-y-1">
            <p><strong>Thông tin thiết bị:</strong> Loại thiết bị, hệ điều hành, phiên bản ứng dụng</p>
            <p><strong>Dữ liệu sử dụng:</strong> Cách bạn tương tác với ứng dụng, tính năng được sử dụng</p>
            <p><strong>Dữ liệu sự cố:</strong> Thông tin về lỗi ứng dụng để cải thiện hiệu suất</p>
          </div>
        </section>

        <section className="glass-panel rounded-[1rem] p-6">
          <h2 className="text-lg font-semibold">3. Cách Chúng tôi Sử dụng Thông tin</h2>
          <p className="mt-3 text-sm text-muted">Chúng tôi sử dụng thông tin thu thập được để:</p>
          <ul className="mt-2 list-disc list-inside text-sm text-muted space-y-1">
            <li>Cung cấp và vận hành ứng dụng Drino</li>
            <li>Lưu trữ và đồng bộ dữ liệu bảo dưỡng xe của bạn</li>
            <li>Gửi thông báo nhắc nhở bảo dưỡng định kỳ</li>
            <li>Cải thiện và phát triển tính năng ứng dụng</li>
            <li>Phân tích và thống kê sử dụng để tối ưu hóa trải nghiệm người dùng</li>
            <li>Khắc phục sự cố kỹ thuật và bảo mật</li>
            <li>Liên lạc với bạn về cập nhật hoặc thay đổi dịch vụ</li>
          </ul>
        </section>

        <section className="glass-panel rounded-[1rem] p-6">
          <h2 className="text-lg font-semibold">4. Lưu trữ và Bảo mật Dữ liệu</h2>

          <h3 className="mt-3 font-semibold">4.1. Lưu trữ dữ liệu</h3>
          <p className="mt-2 text-sm text-muted">Dữ liệu của bạn được lưu trữ cục bộ trên thiết bị của bạn. Nếu bạn chọn đồng bộ dữ liệu, thông tin sẽ được mã hóa và lưu trữ an toàn trên các máy chủ cloud đáng tin cậy.</p>

          <h3 className="mt-3 font-semibold">4.2. Bảo mật</h3>
          <p className="mt-2 text-sm text-muted">Chúng tôi áp dụng các biện pháp bảo mật phù hợp để bảo vệ dữ liệu người dùng.</p>
          <ul className="mt-2 list-disc list-inside text-sm text-muted space-y-1">
            <li>Mã hóa dữ liệu trong quá trình truyền tải (SSL/TLS)</li>
            <li>Kiểm soát truy cập nghiêm ngặt</li>
          </ul>
        </section>

        <section className="glass-panel rounded-[1rem] p-6">
          <h2 className="text-lg font-semibold">5. Chia sẻ Thông tin</h2>
          <p className="mt-3 text-sm text-muted">Chúng tôi <strong>KHÔNG</strong> bán, trao đổi hoặc chia sẻ thông tin cá nhân của bạn cho bên thứ ba vì mục đích thương mại. Thông tin của bạn chỉ có thể được chia sẻ trong các trường hợp sau:</p>
          <ul className="mt-2 list-disc list-inside text-sm text-muted space-y-1">
            <li><strong>Với sự đồng ý của bạn:</strong> Khi bạn cho phép rõ ràng</li>
            <li><strong>Nhà cung cấp dịch vụ:</strong> Các đối tác hỗ trợ vận hành ứng dụng (cloud hosting, analytics) với nghĩa vụ bảo mật nghiêm ngặt</li>
            <li><strong>Yêu cầu pháp lý:</strong> Khi được yêu cầu bởi luật pháp hoặc cơ quan có thẩm quyền</li>
            <li><strong>Bảo vệ quyền lợi:</strong> Để bảo vệ quyền, tài sản hoặc an toàn của chúng tôi và người dùng</li>
          </ul>
        </section>

        <section className="glass-panel rounded-[1rem] p-6">
          <h2 className="text-lg font-semibold">6. Quyền của Bạn</h2>
          <p className="mt-3 text-sm text-muted">Bạn có các quyền sau đối với dữ liệu cá nhân của mình:</p>
          <ul className="mt-2 list-disc list-inside text-sm text-muted space-y-1">
            <li><strong>Quyền truy cập:</strong> Yêu cầu xem dữ liệu cá nhân chúng tôi lưu trữ về bạn</li>
            <li><strong>Quyền chỉnh sửa:</strong> Cập nhật hoặc sửa đổi thông tin không chính xác</li>
            <li><strong>Quyền xóa:</strong> Yêu cầu xóa dữ liệu cá nhân của bạn</li>
            <li><strong>Quyền xuất dữ liệu:</strong> Nhận bản sao dữ liệu của bạn ở định dạng dễ sử dụng</li>
            <li><strong>Quyền rút lại sự đồng ý:</strong> Ngừng thu thập hoặc xử lý dữ liệu bất kỳ lúc nào</li>
          </ul>
          <p className="mt-2 text-sm text-muted">Để thực hiện các quyền này, vui lòng liên hệ với chúng tôi qua thông tin dưới đây.</p>
        </section>

        <section className="glass-panel rounded-[1rem] p-6">
          <h2 className="text-lg font-semibold">7. Thông báo Push và Quyền truy cập</h2>
          <p className="mt-3 text-sm text-muted">Ứng dụng Drino có thể yêu cầu các quyền sau:</p>
          <ul className="mt-2 list-disc list-inside text-sm text-muted space-y-1">
            <li><strong>Thông báo:</strong> Để gửi nhắc nhở bảo dưỡng định kỳ</li>
            <li><strong>Camera/Thư viện ảnh:</strong> Để chụp và lưu ảnh xe, hóa đơn (chỉ khi bạn cho phép)</li>
            <li><strong>Lưu trữ:</strong> Để lưu dữ liệu và hình ảnh cục bộ</li>
          </ul>
          <p className="mt-2 text-sm text-muted">Bạn có thể quản lý các quyền này trong cài đặt thiết bị bất kỳ lúc nào. Việc từ chối một số quyền có thể ảnh hưởng đến chức năng của ứng dụng.</p>
        </section>

        <section className="glass-panel rounded-[1rem] p-6">
          <h2 className="text-lg font-semibold">8. Quảng cáo và Analytics</h2>
          <p className="mt-3 text-sm text-muted">Ứng dụng Drino có thể sử dụng các dịch vụ phân tích bên thứ ba (như Firebase Analytics) để thu thập thông tin về cách sử dụng ứng dụng. Các dịch vụ này có thể thu thập dữ liệu ẩn danh để cải thiện trải nghiệm người dùng.</p>
          <p className="mt-2 text-sm text-muted">Chúng tôi cam kết không hiển thị quảng cáo xâm phạm và bạn có thể từ chối thu thập dữ liệu phân tích trong cài đặt ứng dụng.</p>
        </section>

        <section className="glass-panel rounded-[1rem] p-6">
          <h2 className="text-lg font-semibold">9. Dữ liệu của Trẻ em</h2>
          <p className="mt-3 text-sm text-muted">Ứng dụng Drino không nhắm đến người dùng dưới 13 tuổi. Chúng tôi không cố ý thu thập thông tin cá nhân từ trẻ em. Nếu bạn phát hiện rằng con bạn đã cung cấp thông tin cá nhân cho chúng tôi, vui lòng liên hệ để chúng tôi xóa dữ liệu đó.</p>
        </section>

        <section className="glass-panel rounded-[1rem] p-6">
          <h2 className="text-lg font-semibold">10. Thay đổi Chính sách</h2>
          <p className="mt-3 text-sm text-muted">Chúng tôi có thể cập nhật chính sách quyền riêng tư này theo thời gian. Khi có thay đổi quan trọng, chúng tôi sẽ thông báo cho bạn qua:</p>
          <ul className="mt-2 list-disc list-inside text-sm text-muted space-y-1">
            <li>Thông báo trong ứng dụng</li>
            <li>Email (nếu bạn đã đăng ký)</li>
            <li>Cập nhật ngày "Cập nhật lần cuối" ở đầu trang này</li>
          </ul>
          <p className="mt-2 text-sm text-muted">Chúng tôi khuyến khích bạn xem lại chính sách này định kỳ để luôn cập nhật về cách chúng tôi bảo vệ thông tin của bạn.</p>
        </section>

        <section className="glass-panel rounded-[1rem] p-6">
          <h2 className="text-lg font-semibold">11. Chính sách Cookie</h2>
          <p className="mt-3 text-sm text-muted">Ứng dụng Drino không sử dụng cookie truyền thống. Một số công nghệ lưu trữ cục bộ có thể được sử dụng để lưu tùy chọn và cài đặt người dùng trên thiết bị.</p>
        </section>

        <section className="glass-panel rounded-[1rem] p-6">
          <h2 className="text-lg font-semibold">12. Đăng nhập bên thứ ba</h2>
          <p className="mt-3 text-sm text-muted">Nếu bạn đăng nhập bằng Google hoặc Apple, chúng tôi có thể nhận được một số thông tin cơ bản như tên, email và ảnh đại diện để tạo và quản lý tài khoản của bạn.</p>
        </section>

        <section className="glass-panel rounded-[1rem] p-6">
          <h2 className="text-lg font-semibold">13. Liên hệ</h2>
          <p className="mt-3 text-sm text-muted">Email: drino.support@gmail.com</p>
        </section>

      </div>
    </SiteShell>
  );
}
