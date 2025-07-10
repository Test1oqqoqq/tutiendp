# Tu Tiên Game - Cập Nhật Hệ Thống Pet & Dungeon

## 🐾 Hệ Thống Pet Mới

### 🌟 Phân Loại Pet Theo Độ Hiếm & Màu Sắc
- **⚪ Bình Thường** (50% tỉ lệ) - Bonus +0% EXP/Phần thưởng - Màu Trắng
- **🟢 Không Phổ Biến** (30% tỉ lệ) - Bonus +20% EXP/Phần thưởng - Màu Xanh Lá
- **🔵 Hiếm** (15% tỉ lệ) - Bonus +50% EXP/Phần thưởng - Màu Xanh Dương
- **🟣 Sử Thi** (4% tỉ lệ) - Bonus +100% EXP/Phần thưởng - Màu Tím
- **🟡 Truyền Thuyết** (1% tỉ lệ) - Bonus +200% EXP/Phần thưởng - Màu Vàng

### 🎁 Pet Box Cải Tiến
- Mở rương pet hiện hiển thị độ hiếm của pet nhận được
- Thông báo chi tiết: "🎁 Đã mở Rương Pet! 🐾 Bạn nhận được: 🟡 🌟 Thần Long ⭐ Độ hiếm: Truyền Thuyết"

### 🔧 Tính Năng Pet Mới
- `pet inv` - Xem kho pet với thông tin độ hiếm
- `pet info` - Xem thông tin chi tiết pet đang trang bị
- `pet equip <tên>` - Trang bị pet
- Pet bonus áp dụng cho: Train, PvP, Boss, Dungeon

## 🏰 Hệ Thống Dungeon Cải Tiến

### ⏰ Cooldown 24 Giờ
- Chỉ có thể vào dungeon 1 lần mỗi 24 giờ
- Hiển thị thời gian còn lại: "⏰ Phải chờ X giờ nữa mới có thể vào dungeon tiếp!"

### 🐾 Pet Bonus cho Dungeon
- Pet tăng tỉ lệ thành công dungeon
- Pet tăng phần thưởng EXP và Linh Thạch khi thành công
- Thông báo khi pet bonus được áp dụng

## 💪 Cải Tiến Hệ Thống Bonus

### 🧘 Training
- Pet bonus áp dụng cho EXP nhận được
- Hiển thị "(🐾 Pet bonus)" trong thông báo

### ⚔️ PvP
- Pet bonus tăng sức mạnh chiến đấu
- Pet của cả hai người chơi đều được tính bonus

### 🐲 Boss Fight
- Pet bonus tăng sát thương đối với boss
- Hiển thị "(🐾 Pet bonus)" khi gây sát thương

### 📊 Info Command
- Hiển thị pet và độ hiếm trong thông tin người chơi
- Format: "🐾 Pet: ⚪ 🌟 Thần Long (Truyền Thuyết)"

## 🎮 Cách Sử Dụng

1. **Mua rương pet**: `buy petbox`
2. **Mở rương**: `use petbox` 
3. **Xem kho pet**: `pet inv`
4. **Trang bị pet**: `pet equip ⚪ 🌟 Thần Long`
5. **Xem thông tin pet**: `pet info`
6. **Vào dungeon**: `dungeon` (24h cooldown)
7. **Xem danh hiệu**: `title`
8. **Trang bị danh hiệu**: `title equip <tên>`

## 🔥 Lợi Ích Pet Theo Độ Hiếm

- **Truyền Thuyết**: +200% EXP từ train, +200% damage boss, +200% thành công dungeon
- **Sử Thi**: +100% EXP từ train, +100% damage boss, +100% thành công dungeon  
- **Hiếm**: +50% bonus cho tất cả hoạt động
- **Không Phổ Biến**: +20% bonus
- **Bình Thường**: Không có bonus đặc biệt

Tất cả pet đều có icon màu để dễ nhận biết!

## 🏆 Hệ Thống Danh Hiệu (Title) Mới

### 🎖️ Phân Loại Danh Hiệu
- **🌟 Cảnh Giới**: 🌱 Tu Luyện Sinh, ⚡ Lôi Kiếp Chủ, 🌟 Phi Thăng Tiên
- **⚔️ PvP**: ⚔️ Chiến Binh (5 thắng), 🏆 Võ Lâm Minh Chủ (20 thắng), 👑 Thiên Hạ Đệ Nhất (50 thắng)
- **🐾 Pet**: 🐾 Thú Chủ (5 pet), 🦄 Linh Thú Sư (10 pet), 🟡 Truyền Thuyết Sư (pet legendary)
- **💥 Độ Kiếp**: 💥 Độ Kiếp Vương (10 lần), 🌈 Thiên Kiếp Chủ (25 lần)
- **🧘 Tu Luyện**: 🧘 Khổ Hạnh Tăng (100 lần), ⭐ Tu Luyện Cuồng (500 lần)
- **🐉 Boss**: 🐉 Đồ Long Giả (10k damage), 🔥 Diệt Thế Ma Vương (50k damage)
- **🏯 Clan**: 🏯 Bang Chủ (leader), 🎯 Công Thần (1000 đóng góp)
- **💰 Tài Sản**: 💎 Đại Phú Hào (1000 LT), 💰 Tài Phiệt (5000 LT)
- **🌟 Đặc Biệt**: 🔄 Tái Sinh Giả, ♾️ Bất Tử, 🎭 Ẩn Danh Nhân, 🌟 Thiên Tài

### 🎯 Tính Năng Title
- **Auto-unlock**: Tự động mở khóa danh hiệu khi đạt điều kiện
- **Auto-equip**: Tự động trang bị danh hiệu cao nhất nếu chưa có
- **Display**: Hiển thị trong info và top rankings
- **Notification**: Thông báo khi nhận danh hiệu mới

### 📋 Commands Title
- `title` - Xem menu danh hiệu và danh hiệu hiện tại
- `title list` - Xem danh hiệu đã mở khóa
- `title equip <tên>` - Trang bị danh hiệu
- `title remove` - Gỡ danh hiệu hiện tại
- `title all` - Xem tất cả danh hiệu và tiến độ

## 🏯 Hệ Thống Clan Cải Tiến

### 🔧 Hệ Thống Phê Duyệt Thành Viên
- **Join Request**: Không tự động vào clan, phải xin và chờ duyệt
- **Approval System**: Bang Chủ/Phó Bang Chủ phê duyệt đơn xin vào
- **Request Management**: Xem, duyệt, từ chối đơn xin vào
- **Auto Cleanup**: Tự động xóa đơn của người đã vào clan khác

### 💥 Tính Năng Giải Tán Clan
- **Disband Command**: Bang Chủ có thể giải tán clan
- **Member Removal**: Tất cả thành viên tự động rời clan
- **Data Cleanup**: Xóa hoàn toàn dữ liệu clan

### 📋 Danh Sách Lệnh Clan Đầy Đủ

#### 🌐 Lệnh Chung (Mọi người)
- `clan` - Xem thông tin clan hiện tại
- `clan help` - Xem tất cả lệnh clan
- `clan create <tên>` - Tạo clan mới (100 LT)
- `clan join <tên>` - Xin vào clan (chờ phê duyệt)
- `clan leave` - Rời clan
- `clan list` - Xem top clan
- `clan donate <số>` - Donate Linh Thạch cho clan

#### 🔧 Lệnh Phó Bang Chủ/Bang Chủ
- `clan upgrade <building>` - Nâng cấp công trình
- `clan requests` - Xem danh sách đơn xin vào
- `clan approve <số>` - Phê duyệt đơn xin vào
- `clan reject <số>` - Từ chối đơn xin vào

#### 👑 Lệnh Bang Chủ
- `clan disband` - Giải tán clan (cảnh báo: không thể hoàn tác!)
- `clan kick <@user>` - Đuổi thành viên
- `clan promote <@user>` - Thăng chức thành viên
- `clan demote <@user>` - Giáng chức thành viên

### 🎯 Cải Tiến UI/UX
- **Smart Display**: Hiển thị số đơn xin vào cho leader/co-leader
- **Role-based Commands**: Menu lệnh thay đổi theo vai trò
- **Clear Instructions**: Hướng dẫn rõ ràng cho mỗi tình huống
- **Error Handling**: Xử lý lỗi thông minh và thông báo rõ ràng