import { makeAutoObservable } from "mobx";

export default class ScheduleStore {
  constructor() {
    this._schedules = [
      {
        id: 1,
        weekday: "Понедельник",
        start_time: "09:00",
        end_time: "10:00",
        employeeId: 12,
      },
      {
        id: 2,
        weekday: "Вторник",
        start_time: "10:00",
        end_time: "11:00",
        employeeId: 12,
      },

      {
        id: 3,
        weekday: "Среда",
        start_time: "13:00",
        end_time: "14:00",
        employeeId: 12,
      },
      {
        id: 4,
        weekday: "Понедельник",
        start_time: "12:00",
        end_time: "16:00",
        employeeId: 12,
      },
      {
        id: 5,
        weekday: "Вторник",
        start_time: "09:00",
        end_time: "12:00",
        employeeId: 13,
      },
      {
        id: 6,
        weekday: "Среда",
        start_time: "12:00",
        end_time: "15:00",
        employeeId: 13,
      },

      {
        id: 7,
        weekday: "Понедельник",
        start_time: "15:00",
        end_time: "18:00",
        employeeId: 13,
      },
      {
        id: 8,
        weekday: "Вторник",
        start_time: "12:00",
        end_time: "16:00",
        employeeId: 14,
      },
    ];
    this._selectedSchedule = {};
    makeAutoObservable(this);
  }

  setSchedule(schedule) {
    this._schedules = schedule;
  }

  setSelectedSchedule(schedule) {
    this._selectedSchedule = schedule;
  }

  get getSchedules() {
    return this._schedules;
  }

  get selectedSchedule() {
    return this._selectedSchedule;
  }
}
