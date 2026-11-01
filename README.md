# React Blog

Dự án luyện tập React trong quá trình học fullstack JavaScript.

## Công nghệ
- React, Vite, JavaScript
# Why vite for React setup
-vite is a fast development server and build tool
-efficient Production Build
-simple configuration 
-typescript support
-vite supports features like css pre-processors,css modules
# React js
React is js library
Fast because of virtual DOM
easy to learn 
learning curve(lộ trình học tập) is more less compare other UI technology.
react use to make web front-end application
with react we make SPA(Single Page Application)
friendly with SEO in lib/FW JS(search engine optimization)
high reusability
high-efficiency
SPA-Single Page Application
-Tech giants are using SPA:Google,Facebook,Twister
-Others SPA:F8,Shopee,30shine,..
### The difference
### SPA
-No reload required during use. 
### MPA 
-A more traditional approach
- reload required during use. 
## Kế hoạch
- Ngày 1: Cài môi trường, component đầu tiên
- Ngày 2: JSX, nhúng biến bằng {}
* SX là tiện ích mở rộng cú pháp (syntax extension) cho JavaScript[2].
* Vai trò **: JSX đóng vai trò cốt lõi tạo nên sự phổ biến rộng rãi của React JS nhờ khả năng cho phép viết trực tiếp mã **HTML ngay bên trong tệp JavaScript**[1][3].
* Lợi ích **: Tối ưu hóa quá trình phát triển giao diện, không còn cần phải tách rời tệp HTML và tệp JavaScript hay dùng các câu lệnh thao tác DOM rườm rà như `document.getElementById()` trong JavaScript thuần

- Ngày 3: Tách component ra file riêng
- Ngày 4: Props, component Card
- Ngày 5: Render có điều kiện
- Ngày 6: Render danh sách bằng map, key, filter
- Ngày 7: Trang danh sách sản phẩm hoàn chỉnh

## Cách chạy
npm install
npm run dev

### lộ trình 8 tuần
Tuần	Nội dung (theo mục của khóa)	Dự án làm sau khi học
1	Mục 1: cài Vite, cấu trúc thư mục, component, import/export, JSX, {}, quy tắc thẻ cha, component thuần	Trang giới thiệu bản thân chia thành nhiều component
2	Mục 2 (nửa đầu) + Mục 3 (phần danh sách): props, default props, truyền hàm qua props, map(), key, sự kiện click, useState, ẩn/hiện bằng toán tử 3 ngôi	Trang danh sách sản phẩm, có nút ẩn/hiện chi tiết
3	Mục 2 (nửa sau): lifting state up, derived state, cập nhật state kiểu mảng và object	Todo list (thêm, xóa, tick hoàn thành, bộ lọc)
4	Mục 3 (phần form): onChange, controlled/uncontrolled, checkbox, radio, dropdown, validation cơ bản	Form đăng ký có kiểm tra dữ liệu, hiển thị lỗi
5	Mục 4 (hooks cốt lõi): useEffect, dependency array, useRef, useReducer, custom hook. Mục 5: CSS Modules, Tailwind (chọn 1)	Làm đẹp lại Todo list và form bằng CSS Modules hoặc Tailwind
6	Mục 6: React Router 7 (Routes, Link, NavLink, nested, layout, dynamic route, 404). Bắt đầu Mục 7: fetch GET, loader	App gọi API công khai (phim hoặc thời tiết) có trang danh sách và trang chi tiết
7	Mục 7 (CRUD với JSON-Server: POST, PUT, DELETE) + Mục 8 (phần Context API)	App blog/quản lý sản phẩm có CRUD đầy đủ (đặt tên react-blog hợp ở đây)
8	Mục 10: Lazy Loading, Suspense; xem video phỏng vấn; hoàn thiện, deploy	Deploy Vercel, README, đăng GitHub
