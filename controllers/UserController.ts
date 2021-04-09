import express from 'express';
class UserController {
  async listUser(req:express.Request, res:express.Response) {
    try {
      res.status(200).send({'id': 1, 'name': 'EF', 'email': 'moe.cute@live.com'});
    } catch (error) {
      
    }
    
  }

  async getById(req:express.Request, res:express.Response) {
    try {
      res.status(200).send({'id': '2qase13!@)$@#aw', 'name': 'EF', 'email': 'moe.cute@live.com'});
    } catch (error) {
      
    }
    
  }
}

export default new UserController();