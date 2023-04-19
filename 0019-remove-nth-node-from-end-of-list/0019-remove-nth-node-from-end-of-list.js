/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
let reverse = (head) => {
    let newList = new ListNode();
    let tail = new ListNode();
    let temp = new ListNode();

    tail = head;
    newList = null;

    while(tail !== null)    {
        temp = newList;
        newList = tail;
        tail = tail.next;
        newList.next = temp;
    }
    return newList;
};

let removeNthFromEnd = (head, n) => {
    let output = new ListNode();
    let prev = new ListNode();
    let follow = new ListNode();
    let reverseList = reverse(head);
    let i = 0;

    follow = reverseList;
    //첫번째 노드를 삭제하는 경우
    if(n === 1)
        reverseList = reverseList.next;
    else    {
    //그 외 모든 경우
        while(reverseList.next !== null && (i < n - 1))    {
            i++;
            prev = follow;
            follow = follow.next;
        }
        if(prev !== null)
            prev.next = follow.next;
    }
    output = reverse(reverseList);
    return output;
};