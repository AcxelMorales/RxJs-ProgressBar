import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const text = document.createElement('div');
text.innerHTML = `Labore in aliqua duis velit irure tempor commodo anim minim. Aliquip ipsum cillum reprehenderit est tempor deserunt fugiat nisi ea ex dolor pariatur deserunt. Cupidatat nisi officia in commodo commodo laborum enim sint in aute laborum. Excepteur irure enim consequat ex magna aute excepteur. Deserunt laborum consequat voluptate deserunt occaecat culpa occaecat qui exercitation dolor nisi ut. <br /> <br />

Anim sunt commodo ea et officia ullamco velit irure eu. Minim sunt proident qui nisi do commodo voluptate enim. Sunt excepteur laborum dolore culpa non eu dolore magna ad commodo nulla deserunt ullamco consequat. Tempor sunt tempor excepteur consequat est elit elit nostrud. Lorem cupidatat nisi exercitation consectetur proident ut. Aute pariatur ex anim dolor laborum quis proident nostrud ad commodo tempor sunt aliqua. Dolor Lorem elit duis eiusmod sit occaecat. <br /> <br />

Eiusmod nostrud consequat cupidatat dolor magna. Aliqua consectetur deserunt elit Lorem. Mollit ad elit commodo pariatur aliqua sit in voluptate. <br /> <br />

Tempor Lorem occaecat duis incididunt enim eu ea. Laboris proident velit culpa ex labore in in laborum ipsum. Qui culpa amet irure consectetur non. Nostrud velit dolor cupidatat velit velit voluptate laboris non. Adipisicing laboris irure eu adipisicing ex laborum nostrud culpa in veniam eiusmod excepteur ullamco quis. Eiusmod ex aliqua et adipisicing proident. <br /> <br />

Veniam duis ad reprehenderit do commodo ad quis nisi sint. Est eu tempor qui anim eiusmod est do adipisicing ea consequat ut esse pariatur proident. Fugiat excepteur fugiat cillum est eu id consequat id sint non. Irure esse amet voluptate eiusmod est officia fugiat anim ut Lorem. Commodo adipisicing irure ullamco laborum veniam laboris anim sit veniam proident excepteur enim et.`;

const body = document.querySelector('body');
body.append(text);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

const calculateScrollPercentage = evt => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = evt.target.documentElement;

    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

const scroll$ = fromEvent(document, 'scroll');
// scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
    // map(evt => calculateScrollPercentage(evt))
    map(calculateScrollPercentage),
    tap(console.log)
);

progress$.subscribe(percent => {
    progressBar.style.width = `${percent}%`;
});
