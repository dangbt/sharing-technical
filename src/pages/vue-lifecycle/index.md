---
title: "Understanding Vue.js Lifecycle Hooks"
date: "2019-11-11"
---

![](component-lifecycle.png)

# Creation (Initialization)

  - **Creation** hooks chạy đầu tiên khi trước khi khởi tạo component và thêm vào **DOM**
  - **creation** hooks có thể chạy **SRR**(server-side rendering) và **CSR** (client-side rendering)
  - Bạn không thể truy cập vào **this.$el** vì component chưa khỏi tạo và add vào **DOM**

# beforeCreate
  - khởi tạo component nhưng chưa được access vào **data** và **events**

![](beforeCreate.png)

