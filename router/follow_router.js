const router = require('express').Router();
const follow = require('../repository/follow_repository');

router.post('/follow', async (req, res) => {
    const followingUserId = req.body.followingUserId; 
    const followerUserId = req.body.followerUserId; 
    try {
      await follow.followUser(followingUserId, followerUserId);
      res.status(200).json({ message: 'Successfully followed the user' });
    } catch (error) {
      console.error('Error following the user:', error);
      res.status(500).json({ error: 'An error occurred while following the user' });
    }
  });


module.exports = router;