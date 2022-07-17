---
slug: git-dung-trong-du-an-thuc-te
title: Git - Các lệnh được dùng từ lúc nhận task cho tới lúc tạo PR 🦊
author: Hà Quang Nguyễn
author_title: Web developer
author_url: https://github.com/nerqhard
author_image_url: https://res.cloudinary.com/dp1p2h0rz/image/upload/v1657998466/mui-nextjs/43BE3FAA-7F2F-4D0D-A5CB-FC86D2CAB471_1_105_c_m062du.jpg
tags: [Git, Git trong dự án thực tế]
date: '2022-07-17T04:04:51.904Z'
desc: 'Khi nhắc tới git có khá là nhiều lệnh khác nhau, tuy nhiên trong thực tế sử dụng trong dự án thì có những lệnh nào được sử dụng nhiều nhất? 🤔 Hãy cùng mình khám phá qua bài blog này nhé! 😉'
---
## 0. Nhận task, ví dụ ở đây task có id là 123

- Tí nữa, đọc thấy tạo nhánh có số 123 thì các bạn hiểu ngầm nó chính là `taskId` nhen.
- Ví dụ team mình dev trên nhánh `develop`.

## 1. Lấy code mới nhất trên branch develop

```sh
git checkout develop # switch sang nhánh develop

git pull # lấy code mới nhất về
```

## 2. Làm task trực tiếp trên nhánh develop 
CODING CHANGES 😎
<br />Sau khi code xong, nhờ review lại những thay đổi của mình, review cẩn thận, từ từ.
<br />Review về coding convention.
<br />Review về console log đã xoá chưa?
<br />Review về imports (có dư thừa gì ko?)
<br />Review về eslints 
<br />Review xem chỗ nào logic phức tạp nên add thêm comment vào.
<br />Review xem chỗ nào code nhiều if/else quá thì refactor lại.
<br />...
<br />Review bằng VSCode hen, cho nó dễ nhìn, còn bạn muốn cool ngầu thì cứ git diff và check nhé! 😎
<br />Hãy tập thói quen review code của bản thân cẩn thận trước khi đưa cho lead review nhé! 😉

## 3. Chuẩn bị tạo Pull Request (PR)

> Sau khi đã code xong, giờ chuẩn bị tạo PR
> <br />Nhưng có thể trong lúc mình làm, ai đó đã update thêm lên nhánh develop rồi.
> <br />Nên mình phải lấy code mới nhất trên nhánh develop rồi mới apply cái changes của mình.

```sh
git add . # chấp nhận tất cả changes

git stash # save tất cả code changes vào stash (kiểu nơi giữ code tạm)

git pull  # lấy code mới nhất về
```

## 4. Tạo nhánh cho code changes của mình

```sh
git checkout -b feature/123-add-address-ui
```

## 5. Lấy code từ trong stash ra (hùi nảy lưu bằng git stash)

```sh
git stash pop
```

> OPTIONAL: resolve conflicts nếu có, nhớ test lại để đảm bảo code còn chạy ngon 😅

## 6. Tạo commit, viết commit message

```sh
git status # xem các files thay đổi
git add . # chấp nhận tất cả thay đổi

git commit -m "[123] Add address ui

- More details about your PR
- Keep it short and descriptive"
```

> 📝Lưu ý chỗ chữ màu vàng
> <br/> - Dòng đầu tiên là title
> <br/> - Dòng thứ 2 là empty ( BẮT BUỘC ) 
> <br/> - Dòng thứ 3 trở đi là dòng mô tả thêm về Pull Request của mình.
> <br/> Convention này nó giúp bạn tự động điền title, description vào ô tương ứng trên Github, Gitlab, Bitbucket, ...

## 7. Push code lên remote repository (Github, Gitlab, Bitbucket, ...)

```sh
git push -u origin feature/123-address-ui 
```

## Cuối cùng, lên remote repo tạo PR/MR vào nhánh develop. Xong nhờ lead review thôi hehe 

**📝LƯU Ý**

- Tuỳ dự án sẽ có quy định tên nhánh khác nhau, nhớ follow theo team.
- Làm việc trên nhánh nào cũng tuỳ team, `ko phải` lúc nào cũng là `develop`.
- `Không phải` ai cũng apply cái process này giống mình, `mỗi người mỗi kiểu`.

CHÚC CẢ NHÀ SỨC KHOẺ VÀ HỌC TẬP TỐT NHÉ! ❤️