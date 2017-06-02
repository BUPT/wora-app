import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Http }     from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { parseString } from 'xml2js'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // We proxied rssUrl to http://bbs.cloud.icybee.cn/rss/
  private readonly rssUrl = '/rss/board-Picture'

  public posts: Object[] = []

  constructor(
    public http:    Http,
    public navCtrl: NavController,
  ) {

  }

  ngOnInit() {
    this.http.get(this.rssUrl)
                    .map(res => res.text()) //toJson(res.text()))
                    .subscribe(
                      data => {

                        const fixedData = data.replace(
                                                  /href="\\/g,
                                                  'href="#',
                                                )
                                                .replace(
                                                  /src="\//g,
                                                  'src="http://bbs.cloud.icybee.cn/',
                                                )
                        parseString(fixedData, (err, result) => {
                          this.posts = result.rss.channel[0].item
                          console.log(this.posts)
                        })

                      },
                      err => {
                        console.log("Oops!");
                      }
                    )
  }

}
