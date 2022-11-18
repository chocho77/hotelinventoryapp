import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  hotelName = 'Hilton Hotel';

  numberOfRooms = 10;

  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5

  }

  roomList : RoomList[] = []

  constructor() { }

  ngOnInit(): void {
    this.roomList = [
      {
        roomNumber : 1,
        roomType : 'Deluxe Room',
        amenities : 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 500,
        photos: 'somthing photos',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021'),
        rating:4.1456
      },
    {
       roomNumber : 2,
       roomType : 'Deluxe Room',
       amenities : 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen ',
       price: 600,
       photos: 'something photos',
       checkinTime: new Date('12-Dec-2021'),
       checkoutTime: new Date('05-Jan-2022'),
       rating:3.4556
    },
    {
      roomNumber : 3,
      roomType : 'Deluxe Room',
      amenities : 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen ',
      price: 1000,
      photos: 'something photos',
      checkinTime: new Date('04-Jan-2023'),
      checkoutTime: new Date('10-Jan-2023'),
      rating:5.6654
    },
    {
      roomNumber: 4,
      roomType : 'Private Suite',
      amenities : 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 15000,
      photos: 'someting photos',
      checkinTime: new Date('05-Mar-2023'),
      checkoutTime: new Date('10-Mar-2023'),
      rating:6.1565
    },
    {
      roomNumber:5,
      roomType: 'Private Suite',
      amenities : 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 14000,
      photos: 'something photos',
      checkinTime: new Date('06-Jun-2023'),
      checkoutTime: new Date('10-Jun-2023'),
      rating:5.4565
    }

    ]
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

}
