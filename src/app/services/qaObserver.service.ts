import { Subject, Observable } from "rxjs";

export class QaObserver {
    private s = new Subject<any>();

    /**
     * 推荐问题组件中的问题传递
     * @param question: any
     */
    setQuestion(question: any) {
      this.s.next(question);
    }
    
    getQuestion(): Observable<any> {
      return this.s.asObservable();
    } 
}
