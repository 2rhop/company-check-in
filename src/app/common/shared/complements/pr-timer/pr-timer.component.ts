import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ClockService } from '../../../core/services/clock.service';

@Component({
  selector: 'pr-timer',
  templateUrl: './pr-timer.component.html',
  styleUrls: ['./pr-timer.component.css'],
})
export class PrTimerComponent implements OnInit {

  time:Date;
  @Output() timeEmitter=new EventEmitter<Date>();

  constructor(private clockService: ClockService) { }

  ngOnInit() {
    this.clockService.getClock().subscribe(time => {
      this.time = time;
      this.timeEmitter.emit(time);
    });
  }
  
}
