import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.css"]
})
export class NewsComponent implements OnInit {
  constructor(public http: HttpClient) {}

  ngOnInit() {}
  run() {
    var api = "http://a.itying.com/api/productlist";
    this.http.get(api).subscribe(Response => {
      console.log(Response);
    });
  }
  go() {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    var api = "http://127.0.0.1:3000/doLogin";
    this.http
      .post(api, { username: "张三", age: "20" }, httpOptions)
      .subscribe(response => {
        console.log(response);
      });
  }
}
