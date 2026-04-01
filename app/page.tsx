import { ConfigChecker } from "./components/config-checker";

export default function HomePage() {
  return (
    <main>
      <h1>Modern Addon Maker (Next.js)</h1>
      <p>
        รีแฟกเตอร์จาก HTML ไฟล์เดียวเป็นโครงสร้าง Next.js + CSS แยกไฟล์ และย้ายข้อมูลสำคัญไปฝั่งเซิร์ฟเวอร์
      </p>

      <div className="panel" style={{ margin: "16px 0" }}>
        <h2>แนวทางป้องกันที่ทำให้แล้ว</h2>
        <ul>
          <li>แยก style ออกไปไว้ใน app/globals.css</li>
          <li>ย้ายค่า config สำคัญไป endpoint /api/build-config</li>
          <li>ปิด x-powered-by header ใน Next config</li>
          <li>สามารถเพิ่ม rate limit + auth สำหรับ endpoint สำคัญได้ต่อ</li>
        </ul>
      </div>

      <ConfigChecker />
    </main>
  );
}
