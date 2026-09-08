# AEC Treasury Lotto

เว็บไซต์แบบหลายหน้า โดยแยก HTML, CSS และ JavaScript รายหน้า และใช้ Topbar/Footer ร่วมกัน

## เปิดใช้งาน

ต้องเปิดผ่าน local server เพราะเบราว์เซอร์ไม่อนุญาตให้ `fetch()` component จาก `file://`

ตัวอย่างใน VS Code: คลิกขวา `dist/index.html` แล้วเลือก **Open with Live Server**

## โครงหลัก

- `dist/components/` — Topbar และ Footer ที่ใช้ร่วมกัน
- `dist/assets/css/global.css` — Theme และ layout กลาง
- `dist/assets/css/pages/` — CSS ของแต่ละหน้า
- `dist/assets/js/shared.js` — โหลด component กลางและควบคุมเมนูมือถือ
- `dist/assets/js/pages/` — JavaScript ของแต่ละหน้า

