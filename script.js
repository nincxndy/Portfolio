document.addEventListener('DOMContentLoaded', function() {
    const pageFlip = new St.PageFlip(
        document.getElementById("my-portfolio-book"),
        {
            width: 450,         // ความกว้างหน้าเดี่ยว (พิกเซล)
            height: 600,        // ความสูงหน้าเดี่ยว (พิกเซล)
            size: "stretch",
            minWidth: 300,
            maxWidth: 1000,
            minHeight: 400,
            maxHeight: 1350,
            drawShadow: true,   // แสดงเงาขณะพลิกหน้า
            showCover: true,    // กำหนดให้หน้าแรกเปิดแสดงเป็นปกเดี่ยว
            usePortrait: true   // สลับเป็นหน้าเดี่ยวอัตโนมัติบนหน้าจอมือถือ
        }
    );

    // ทำการโหลด Element ที่มีคลาส .page เข้าสู่ระบบ E-book
    pageFlip.loadFromHTML(document.querySelectorAll(".page"));
});