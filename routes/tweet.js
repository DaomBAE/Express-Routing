const express = require("express");

const router = express.Router();

router.get('/', (req, res) => {
    res.send("트윗 조회");
});

router.get('/:id', (req, res) => {
    console.log(req.params);
    
    res.send("특정 트윗 조회");
});

router.post("/", (req, res) => {
    //데이터 베이스 조회
    // 5 id 생성 ?
    // '너는 이제부터 5번 유저다'


    res.send("트윗 생성");
  });
  
  router.put("/:id", (req, res) => {
    res.send("특정 트윗 수정");
  });
  
  router.delete("/:id", (req, res) => {
      res.send("트윗 삭제");
    });

module.exports = router;
