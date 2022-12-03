/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* addTwoNumbers(struct ListNode* l1, struct ListNode* l2){
    struct ListNode* answer = NULL;
    int carryover = 0;

    while (l1 || l2) {
        int count = carryover;
        carryover = 0;
        struct ListNode* tmp = malloc(sizeof(struct ListNode));
        
        if (l1) {
            count += l1->val;
            l1 = l1->next;
        }
        if (l2) {
            count += l2->val;
            l2 = l2->next;
        }
        if (count > 9) {
            carryover = count / 10;
            count = count - 10;
        }
    
        tmp->val = count;
        tmp->next = NULL;
        
        if (answer == NULL) {
            answer = tmp;
        } else {
            struct ListNode* ptr = answer;
            while (ptr->next != NULL) {
                ptr = ptr->next;
            }
            ptr->next = tmp;
        }
    }
    
    if (carryover != 0) {
        struct ListNode* tmp = malloc(sizeof(struct ListNode));
        tmp->val = carryover;
        tmp->next = NULL;
        struct ListNode* ptr = answer;
        while (ptr->next != NULL) {
            ptr = ptr->next;
        }
        ptr->next = tmp;
    }

    return answer;
}

