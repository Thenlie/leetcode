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
var deleteDuplicates = function(head) {
    if (!head) return null;
    let cursor = head;
    let next = head.next;
    while (next) {
        if (cursor.val === next.val) {
            cursor.next = next.next; // Removes duplicate!
        } else {
            cursor = cursor.next
        }
        next = next.next
    }
    return head;
}   
