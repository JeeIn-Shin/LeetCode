/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let oddEvenList = (head) => {
    let count = 0;
    let temp = head;
    
    while(temp)    {
        count++;
        temp = temp.next;
    }

    if(count < 3)
        return head;
    else    {
        let odd = head;
        let even = head.next;
        let evenHead = head.next;
        //odd와 even는? 동일한 구간을 유지하면서 이동함
        while(even && even.next)    {
            odd.next = even.next;
            odd = odd.next;

            even.next = odd.next;
            even = even.next;
        }
        odd.next = evenHead;
        return head;
    }
};