interface JobOpts {
  id: string;
  url: string;
  title: string;
  company: string;
  description: string;
  location: string;
}

export class Job {
  public id: string;
  public title: string;
  public url: string;
  public company: string;
  public description: string;
  public location: string;

  constructor(payload: JobOpts) {
    this.id = payload.id;
    this.title = payload.title;
    this.url = payload.url;
    this.company = payload.company;
    this.description = payload.description;
    this.location = payload.location;
  }
}
