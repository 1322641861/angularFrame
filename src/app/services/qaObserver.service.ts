import { Subject, Observable } from "rxjs";

export class QaObserver<T> {
    private s = new Subject<T>();

    /**
     * 推荐问题组件中的问题传递
     * @param question: T
     */
    setQuestion(question: T) {
      this.s.next(question);
    }
    
    getQuestion(): Observable<T> {
      return this.s.asObservable();
    } 
}
