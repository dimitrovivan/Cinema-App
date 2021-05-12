
export function listenForSeatClickAndChangeState(e) {

    let { target } = e;

    if(!target.classList.contains('cinema-hall__list-item') || target.classList.contains('reserved')) return;

    if(target.classList.contains('selected')) {
        target.classList.remove('selected');
    } else {
        target.classList.add('selected');
    }
}