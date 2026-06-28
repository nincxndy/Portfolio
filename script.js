document.addEventListener('DOMContentLoaded', function() {
    const pageFlip = new St.PageFlip(
        document.getElementById("my-portfolio-book"),
        {
            width: 500,          // ความกว้างหน้าเดี่ยว
            height: 650,         // ความสูงหน้าเดี่ยว
            size: "stretch",     // ยืดหยุ่นตามหน้าจออุปกรณ์
            minWidth: 280,       
            maxWidth: 550,
            minHeight: 364,
            maxHeight: 715,
            drawShadow: true,    // เปิดเงาสมจริง
            showCover: true,     // บังคับปกหน้าและปกหลังให้แสดงเป็นหน้าเดี่ยวตรงกลาง (ไม่แตกเป็นหน้าคู่)
            usePortrait: true,   // เปลี่ยนเป็นหน้าเดี่ยวในแนวตั้งอัตโนมัติเมื่อใช้บนโทรศัพท์มือถือ
            swipeDistance: 30    // ระยะลากนิ้ว/เมาส์เพื่อพลิกหน้า
        }
    );

    // โหลดหน้ากระดาษทั้งหมด (ปกหน้า + เนื้อหา 20 หน้า + ปกหลัง = 22 หน้า)
    pageFlip.loadFromHTML(document.querySelectorAll(".page"));
});