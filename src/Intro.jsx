import Pic1 from './assets/anh2.jpg'

function Intro() {
    return (
        <>
            <h1>Intro</h1>
            <div id="Infor">
                <img src={Pic1} alt="anh dai dien" />
                <div>
                    <h2>NguyenManh</h2>
                    <ul>
                        <li>Born:21/02/2007</li>
                        <li>Age:19 years old</li>
                        <li>Weight:60kg</li>
                        <li>Height:172cm</li>
                    </ul>
                </div>
            </div>
            <h2>About me</h2>
            <p>  Xin chào, mình là [tên bạn], đang học để trở thành lập trình viên fullstack JavaScript. Mình đã có nền tảng về HTML, CSS, JavaScript và Git, đồng thời đang học React để xây dựng giao diện web. Mình thích học bằng cách làm dự án thực tế và đẩy mọi sản phẩm lên GitHub để theo dõi tiến bộ của mình. Mục tiêu tiếp theo là học Node.js, Express và MySQL để hoàn thiện một ứng dụng fullstack hoàn chỉnh. Mình đang tìm cơ hội thực tập hoặc fresher để học hỏi và phát triển.</p>
            <p>
                <div>
                    <ul><h3>My experience</h3>
                        <li>Tự học lập trình web theo lộ trình fullstack JavaScript (HTML, CSS, JavaScript, Git, đang học React)</li>
                        <li>Thực hành dựng giao diện bằng HTML/CSS và luyện thao tác DOM bằng JavaScript</li>
                        <li> Làm quen với quy trình Git: commit và đẩy code lên GitHub</li>
                        <li>Khởi tạo project React bằng Vite (repo react-blog), viết component bằng JSX</li>
                        <li>Tự học theo lộ trình có kế hoạch: chia mốc theo tuần, mỗi giai đoạn có sản phẩm thực hành</li>

                    </ul>
                    <ul><h3>My Skills</h3>

                        <li>HTML/CSS: dựng được trang từ thiết kế (card, navbar, flexbox/grid, responsive)</li>
                        <li>JavaScript: nắm map, filter, reduce, destructuring, spread, module</li>
                        <li>Bất đồng bộ: gọi API bằng fetch với async/await</li>
                        <li>Git/GitHub: học xong Git, biết commit và đẩy code lên GitHub</li>
                        <li>React (mới bắt đầu): tạo được project bằng Vite, biết cấu trúc thư mục, viết được component App với JSX</li>
                        <li>Dự án: đã làm 1-2 dự án nhỏ bằng JS</li>
                    </ul>
                </div>
            </p >
        </>)
}
export default Intro;