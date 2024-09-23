import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  hotelName = "Hilton Hotel";

  numberofRooms = 10;
  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  };

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: "Deluxe Rooms",
      amenities: "Air Conditioner, Free Wi-fi, Tv, Bathroom, Kitchen",
      price: 500,
      photos: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      checkinTime: new Date("23-sept-2024"),
      checkoutTime: new Date("12-Nov-2024"),
  },
  {
    roomNumber: 2,
    roomType: "Deluxe Rooms",
    amenities: "Air Conditioner, Free Wi-fi, Tv, Bathroom, Kitchen",
    price: 1000,
    photos: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    checkinTime: new Date("24-sept-2024"),
    checkoutTime: new Date("13-Nov-2024"),
  },
  {
    roomNumber: 3,
    roomType: "Private Rooms",
    amenities: "Air Conditioner, Free Wi-fi, Tv, Bathroom, Kitchen",
    price: 15000,
    photos: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    checkinTime: new Date("25-sept-2024"),
    checkoutTime: new Date("14-Nov-2024"),
  },

]

  constructor() { }

  ngOnInit(): void {}

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

}
