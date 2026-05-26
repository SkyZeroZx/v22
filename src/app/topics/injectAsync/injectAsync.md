> Imagine a `ReportExporter` that depends on a heavy spreadsheet library. Most users open the report;
> only a few click Export.
> [- Lazy Loading Services Guide](https://next.angular.dev/guide/di/lazy-loading-services#)

Load the exporter on demand by clicking the button.

My own take on this pattern from the doc example, which you can view and run in-code here.

```ts
@Component({
  selector: 'app-injectAsync',
  template: ` <button (click)="export()">Export</button> `,
})
export class InjectAsync {
  private exporter = injectAsync(() => import('./lazy-service').then((m) => m.LazyService));

  async export() {
    const exporter = await this.exporter();
    exporter.export();
  }
}
```

Once you click this, check your console logs. Not only will the message that I added to the respective method call be logged, but you will
also see a log from the service's constructor that was created on demand.
