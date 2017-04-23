import moment from 'moment';

class HomeTimeChecker {
  constructor({startTime, duration = 9} = {}) {
    this.moments = {};
    this.duration = duration;
    this.updateStartTime(startTime);
  }

  updateStartTime(startTime) {
    this.moments.start = this.createStartMoment(startTime);
    this.moments.end = this.createEndMoment(this.moments.start);
  }

  createStartMoment(startTime) {
    const [hour, minute] = startTime.split(':');
    return moment({hour, minute});
  }

  createEndMoment(startMoment) {
    return startMoment.clone().add(this.duration, 'h');
  }

  get remainingTime() {
    const currentMoment = moment();

    if (currentMoment.isBefore(this.moments.start) || currentMoment.isAfter(this.moments.end))
      return false;

    const difference = this.moments.end.diff(currentMoment);
    const duration = moment.duration(difference);

    return duration.humanize(true);
  }
}

export default HomeTimeChecker;
