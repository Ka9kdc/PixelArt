const express = require("express");
const artworkRouter = express();
const { requireUser } = require("./utils");
const {
  getPublicArtwork,
  getArtworkByUserId,
  createArtwork,
  getPublicArtworkLimited,
} = require("../db");

artworkRouter.get("/public", async (req, res, next) => {
  try {
    const allArtwork = await getPublicArtwork();
    res.send(allArtwork);
  } catch (error) {
    next(error);
  }
});

artworkRouter.get("/limit", async (req, res, next) => {
  try {
    const allArtwork = await getPublicArtworkLimited();
    res.send(allArtwork);
  } catch (error) {
    next(error);
  }
});

artworkRouter.get("/myArtwork", requireUser, async (req, res, next) => {
  try {
    const allArtwork = await getArtworkByUserId(req.user.id);
    res.send(allArtwork);
  } catch (error) {
    next(error);
  }
});

artworkRouter.post("/newArtwork", requireUser, async (req, res, next) => {
  try {
    const artObj = {
      userId: req.user.id,
      imageArr: req.body.imageArr,
      borders: req.body.borders,
      name: req.body.name,
      isPublic: req.body.isPublic,
    };

    const newArtwork = await createArtwork(artObj);

    res.send(newArtwork);
  } catch (error) {
    next(error);
  }
});

module.exports = artworkRouter;
