import React, { useEffect, useState } from "react";
import styles from "./Rooms.module.css";
import RoomCard from "../../components/RoomCard/RoomCard";
import AddRoomModal from "../../components/AddRoomModal/AddRoomModal";
import { getAllRooms } from "../../http";

// const rooms = [
//   {
//     id: 1,
//     topic: "Which framework best for frontend?",
//     speakers: [
//       {
//         id: 1,
//         name: "John Doe",
//         avatar: "/images/avatar.png",
//       },
//       {
//         id: 2,
//         name: "Jane Doe",
//         avatar: "/images/avatar.png",
//       },
//     ],
//     totalPeople: 40,
//   },
//   {
//     id: 2,
//     topic: "Which framework best for frontend?",
//     speakers: [
//       {
//         id: 1,
//         name: "John Doe",
//         avatar: "/images/avatar.png",
//       },
//       {
//         id: 2,
//         name: "Jane Doe",
//         avatar: "/images/avatar.png",
//       },
//     ],
//     totalPeople: 40,
//   },
//   {
//     id: 3,
//     topic: "Which framework best for frontend?",
//     speakers: [
//       {
//         id: 1,
//         name: "John Doe",
//         avatar: "/images/avatar.png",
//       },
//       {
//         id: 2,
//         name: "Jane Doe",
//         avatar: "/images/avatar.png",
//       },
//     ],
//     totalPeople: 40,
//   },
//   {
//     id: 4,
//     topic: "Which framework best for frontend?",
//     speakers: [
//       {
//         id: 1,
//         name: "John Doe",
//         avatar: "/images/avatar.png",
//       },
//       {
//         id: 2,
//         name: "Jane Doe",
//         avatar: "/images/avatar.png",
//       },
//     ],
//     totalPeople: 40,
//   },
//   {
//     id: 5,
//     topic: "Which framework best for frontend?",
//     speakers: [
//       {
//         id: 1,
//         name: "John Doe",
//         avatar: "/images/avatar.png",
//       },
//       {
//         id: 2,
//         name: "Jane Doe",
//         avatar: "/images/avatar.png",
//       },
//     ],
//     totalPeople: 40,
//   },
// ];

const Rooms = () => {
  const [showModal, setShowModal] = useState(false);
  const [rooms, setRooms] = useState([]);

  const openModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    const fetchRooms = async () => {
      const { data } = await getAllRooms();
      setRooms(data);
    };

    fetchRooms();
  }, []);

  return (
    <>
      <div className="container">
        <div className={styles.roomHeader}>
          <div className={styles.left}>
            <span className={styles.heading}>All voice rooms</span>
            <div className={styles.searchBox}>
              <img src="/images/search-icon.png" alt="search" />
              <input type="text" className={styles.searchInput} />
            </div>
          </div>
          <div className={styles.right}>
            <button onClick={openModal} className={styles.startRoomButton}>
              <img src="/images/add-room-icon.png" alt="add-room" />
              <span className="">Start a room</span>
            </button>
          </div>
        </div>
        <div className={styles.roomList}>
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
      {showModal && <AddRoomModal onClose={() => setShowModal(false)} />}
    </>
  );
};

export default Rooms;
