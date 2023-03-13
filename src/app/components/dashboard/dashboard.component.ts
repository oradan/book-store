import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  recentOrders: any = [
    { orderId: '11', orderTotal: '58', orderDate: '2023-01-11T12.00.00', items: [{ name: 'Cand corpul spune nu', author: 'Gabor Mate', price: '50' }, { name: 'Totul se termina cu noi', author: 'Colleen Hoover', price: '8' }] },
    { orderId: '12', orderTotal: '10', orderDate: '2023-02-12T12.00.00', items: [{ name: 'Acolo unde canta racii', author: 'Delia Owens', price: '10' }] },
    { orderId: '13', orderTotal: '33', orderDate: '2023-03-13T12.00.00', items: [{ name: 'Atomic Habits', author: 'James Clear', price: '25' }, { name: 'Totul se termina cu noi', author: 'Colleen Hoover', price: '8' }] },
    { orderId: '14', orderTotal: '88', orderDate: '2023-04-14T12.00.00', items: [{ name: 'Layla', author: 'Colleen Hoover', price: '50' }, { name: 'Cand corpul spune nu', author: 'Gabor Mate', price: '50' }] },
    { orderId: '15', orderTotal: '99', orderDate: '2023-03-15T12.00.00', items: [{ name: 'Totul se termina cu noi', author: 'Colleen Hoover', price: '8' }] },
    { orderId: '16', orderTotal: '24', orderDate: '2023-02-16T12.00.00', items: [{ name: 'Cand corpul spune nu', author: 'Gabor Mate', price: '50' }] },
    { orderId: '17', orderTotal: '36', orderDate: '2023-02-17T12.00.00', items: [{ name: 'Arta manipularii', author: 'Kevin Dutton', price: '50' }, { name: 'Totul se termina cu noi', author: 'Colleen Hoover', price: '8' }] },
    { orderId: '18', orderTotal: '87', orderDate: '2023-03-18T12.00.00', items: [{ name: 'Cand corpul spune nu', author: 'Gabor Mate', price: '50' }, { name: 'Ugly love', author: 'Colleen Hoover', price: '8' }] },
    { orderId: '19', orderTotal: '25', orderDate: '2023-01-19T12.00.00', items: [{ name: 'Totul se termina cu noi', author: 'Colleen Hoover', price: '8' }] },
    { orderId: '20', orderTotal: '22', orderDate: '2023-02-14T12.00.00', items: [{ name: 'Cand corpul spune nu', author: 'Gabor Mate', price: '50' }, { name: 'Totul se termina cu noi', author: 'Colleen Hoover', price: '8' }] },
    { orderId: '21', orderTotal: '33', orderDate: '2023-03-20T12.00.00', items: [{ name: 'Cand corpul spune nu', author: 'Gabor Mate', price: '50' }, { name: 'Totul se termina cu noi', author: 'Colleen Hoover', price: '8' }] },
    { orderId: '22', orderTotal: '10', orderDate: '2023-04-21T12.00.00', items: [{ name: 'Cand corpul spune nu', author: 'Gabor Mate', price: '50' }, { name: 'Totul se termina cu noi', author: 'Colleen Hoover', price: '8' }] },
  ]

  favoriteBooks: any = [
    {
      id: 1,
      author: 'Gabor Mate',
      name: 'Cand corpul spune nu',
      img: 'cand-corpul-spune-nu.PNG',
      rates: 3,
      price: 5155,
      categoryCode: 'RO',
      publisher: 'Curtea Veche',
      descriptionId: 'D1',
      shopId: ['sh1', 'sh3']
    },
    {
      id: 2,
      author: 'Colleen Hoover',
      name: 'Totul se termina cu noi',
      img: 'totul-se-termina-cu-noi.PNG',
      rates: 4,
      price: 8899,
      categoryCode: 'SF',
      publisher: 'Epica',
      descriptionId: 'D2',
      shopId: ['sh4', 'sh5']
    },
    {
      id: 3,
      author: 'Delia Owens',
      name: 'Acolo unde canta racii ',
      img: 'acolo-unde-canta-racii.PNG',
      rates: 5,
      price: 2599,
      categoryCode: 'FT',
      publisher: 'Pandora M',
      descriptionId: 'D3',
      shopId: []
    },
    {
      id: 4,
      author: 'James Clear',
      name: 'Atomic Habits',
      img: 'atomic-habits.png',
      rates: 1,
      price: 5000,
      categoryCode: 'TH',
      publisher: 'Lifestyle',
      descriptionId: 'D4',
      shopId: ['sh1', 'sh5']
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
