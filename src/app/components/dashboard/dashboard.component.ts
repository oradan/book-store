import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  recentOrders: any = [
    { order_id: '11', order_total: '58', order_date: '2023-01-11T12:00:00', items: [{ name: 'Cand corpul spune nu', author: 'Gabor Mate', price: '50' }, { name: 'Totul se termina cu noi', author: 'Colleen Hoover', price: '8' }] },
    { order_id: '12', order_total: '10', order_date: '2023-02-12T12:00:00', items: [{ name: 'Acolo unde canta racii', author: 'Delia Owens', price: '10' }] },
    { order_id: '13', order_total: '33', order_date: '2023-03-13T12:00:00', items: [{ name: 'Atomic Habits', author: 'James Clear', price: '25' }, { name: 'Totul se termina cu noi', author: 'Colleen Hoover', price: '8' }] },
    { order_id: '14', order_total: '88', order_date: '2023-04-14T12:00:00', items: [{ name: 'Layla', author: 'Colleen Hoover', price: '50' }, { name: 'Cand corpul spune nu', author: 'Gabor Mate', price: '50' }] },
    { order_id: '15', order_total: '99', order_date: '2023-03-15T12:00:00', items: [{ name: 'Totul se termina cu noi', author: 'Colleen Hoover', price: '8' }] },
    { order_id: '16', order_total: '24', order_date: '2023-02-16T12:00:00', items: [{ name: 'Cand corpul spune nu', author: 'Gabor Mate', price: '50' }] },
    { order_id: '17', order_total: '36', order_date: '2023-02-17T12:00:00', items: [{ name: 'Arta manipularii', author: 'Kevin Dutton', price: '50' }, { name: 'Totul se termina cu noi', author: 'Colleen Hoover', price: '8' }] },
    { order_id: '18', order_total: '87', order_date: '2023-03-18T12:00:00', items: [{ name: 'Cand corpul spune nu', author: 'Gabor Mate', price: '50' }, { name: 'Ugly love', author: 'Colleen Hoover', price: '8' }] },
    { order_id: '19', order_total: '25', order_date: '2023-01-19T12:00:00', items: [{ name: 'Totul se termina cu noi', author: 'Colleen Hoover', price: '8' }] },
    { order_id: '20', order_total: '22', order_date: '2023-02-14T12:00:00', items: [{ name: 'Cand corpul spune nu', author: 'Gabor Mate', price: '50' }, { name: 'Totul se termina cu noi', author: 'Colleen Hoover', price: '8' }] },
    { order_id: '21', order_total: '33', order_date: '2023-03-20T12:00:00', items: [{ name: 'Cand corpul spune nu', author: 'Gabor Mate', price: '50' }, { name: 'Totul se termina cu noi', author: 'Colleen Hoover', price: '8' }] },
    { order_id: '22', order_total: '10', order_date: '2023-04-21T12:00:00', items: [{ name: 'Cand corpul spune nu', author: 'Gabor Mate', price: '50' }, { name: 'Totul se termina cu noi', author: 'Colleen Hoover', price: '8' }] },
  ]

  favoriteBooks: any = [
    {
      id: 1,
      author: 'Gabor Mate',
      name: 'Cand corpul spune nu',
      img: 'assets/cand-corpul-spune-nu.PNG',
      rates: 3,
      price: 5155,
      categoryCode: 'RO',
      publisher: 'Curtea Veche',
      descriptionId: 'D1',
      shopId: ['sh1', 'sh3'],
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      id: 2,
      author: 'Colleen Hoover',
      name: 'Totul se termina cu noi',
      img: 'assets/totul-se-termina-cu-noi.PNG',
      rates: 4,
      price: 8899,
      categoryCode: 'SF',
      publisher: 'Epica',
      descriptionId: 'D2',
      shopId: ['sh4', 'sh5'],
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
    },
    {
      id: 3,
      author: 'Delia Owens',
      name: 'Acolo unde canta racii ',
      img: 'assets/acolo-unde-canta-racii.PNG',
      rates: 5,
      price: 2599,
      categoryCode: 'FT',
      publisher: 'Pandora M',
      descriptionId: 'D3',
      shopId: [],
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      id: 4,
      author: 'James Clear',
      name: 'Atomic Habits',
      img: 'assets/atomic-habits.png',
      rates: 1,
      price: 5000,
      categoryCode: 'TH',
      publisher: 'Lifestyle',
      descriptionId: 'D4',
      shopId: ['sh1', 'sh5'],
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }
  ]
  displayedColumns = [
    { columnDef: "order_id", columnName: "Order Id" },
    { columnDef: "order_total", columnName: "Total Price" },
    { columnDef: "order_date", columnName: "Order Date", isDate: true }
  ]
  userFavoriteBooks: string[] = [];
  constructor() { }
  date = new Date()
  ngOnInit(): void {
    this.userFavoriteBooks = localStorage.getItem('favorite_books') ? JSON.parse(localStorage.getItem('favorite_books') as string) : [];

  }


  isUserFavorite(id: string) {
    return this.userFavoriteBooks.includes(id)
  }

  toggleFvorite(id: string) {
    if (this.userFavoriteBooks.includes(id)) {
      const intex = this.userFavoriteBooks.indexOf(id);
      this.userFavoriteBooks.splice(intex, 1);
    } else {
      this.userFavoriteBooks.push(id)
    }

    localStorage.setItem('favorite_books', JSON.stringify(this.userFavoriteBooks))
  }

  getCoulmnDEf(displayedColumns: any) {
    return displayedColumns.map((e:any) => e.columnDef)
  }
}
