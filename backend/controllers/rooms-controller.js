const RoomDto = require("../dtos/room-dto");
const roomService = require("../services/room-service");

class RoomsController {
  create = async (req, res) => {
    const { topic, roomType } = req.body;

    if (!topic || !roomType) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    const room = await roomService.create({
      topic,
      roomType,
      ownerId: req.user._id,
    });

    return res.status(201).json(new RoomDto(room));
  };

  index = async (req, res) => {
    const rooms = await roomService.getAllRooms(["open"]);

    const allRooms = rooms.map((room) => new RoomDto(room));
    return res.status(200).json(allRooms);
  };
}

module.exports = new RoomsController();
