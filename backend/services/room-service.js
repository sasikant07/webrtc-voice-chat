const RoomModel = require("../models/room-model");

class RoomService {
  create = async (payload) => {
    const { topic, roomType, ownerId } = payload;
    const room = await RoomModel.create({
      topic,
      roomType,
      ownerId,
      speakers: [ownerId],
    });
    return room;
  };

  getAllRooms = async (types) => {
    const rooms = await RoomModel.find({ roomType: { $in: types } })
      .populate("speakers")
      .populate("ownerId")
      .exec();
    return rooms;
  };

  getRoom = async (roomId) => {
    const room = await RoomModel.findOne({ _id: roomId });
    return room;
  };
}

module.exports = new RoomService();
