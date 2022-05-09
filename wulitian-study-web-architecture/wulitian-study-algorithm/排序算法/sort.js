/**
 * 冒泡排序
 * @param {*} arr 
 * @returns 
 */
function bubbleSort(arr) {
    if (arr.length === 0) {
        return arr;
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }

    return arr;
}
/**
 * 选择排序
 * @param {*} arr 
 * @returns 
 */
function selectionSort(arr) {
    if (arr.length === 0) {
        return arr;
    }
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
    return arr;
}
/**
 * 插入排序
 * @param {*} arr 
 * @returns 
 */
function insertSort(arr) {
    if (arr.length === 0) {
        return arr;
    }
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = temp;
    }
    return arr;
}
/**
 * 合并
 * @param {*} leftArr 
 * @param {*} rightArr 
 * @returns 
 */
function merge(leftArr, rightArr) {
    if (arr.length === 0) {
        return arr;
    }
    let res = [];
    while (leftArr.length > 0 && rightArr.length > 0) {
        res.push(leftArr[0] > rightArr[0] ? rightArr.shift() : leftArr.shift())
    }
    return [...res, ...leftArr, ...rightArr]
}
/**
 * 归并排序
 * @param {*} arr 
 * @returns 
 */
function mergeSort(arr) {
    if (arr.length === 0) {
        return arr;
    }
    if (arr.length < 2) return arr;
    let center = Math.floor(arr.length >> 1);
    let leftArr = arr.slice(0, center);
    let rightArr = arr.slice(center);
    return merge(mergeSort(leftArr), mergeSort(rightArr))
}
/**
 * 快速排序
 * @param {*} arr 
 * @returns 
 */
function quickSort(arr) {
    if (arr.length < 2) return arr;
    let midVal = arr.splice(arr.length >> 1, 1)
    let leftArr = [];
    let rightArr = [];
    for (let i = 0; i < arr.length; i++) {
        //隐式转换[2]>1相当于2>1
        if (arr[i] < midVal) {
            leftArr.push(arr[i])
        } else {
            rightArr.push(arr[i])
        }
    }
    return [...quickSort(leftArr), ...midVal, ...quickSort(rightArr)]
}
/**
 * 希尔排序
 * @param {*} arr 
 * @returns 
 */
function shellSort(arr) {
    if (arr.length === 0) {
        return arr;
    }
    let len = arr.length,
        temp,
        gap = 1;
    while (gap < len / 3) {
        gap = gap * 3 + 1;
    }
    for (gap; gap > 0; gap = Math.floor(gap / 3)) {
        for (let i = gap; i < len; i++) {
            temp = arr[i];
            let j = i - gap;
            while (j >= 0 && arr[j] > temp) {
                arr[j + gap] = arr[j];
                j -= gap;
            }
            arr[j + gap] = temp;
            console.log('arr  :', arr);
        }
    }
    return arr;
};
/**
 * 计数排序
 * @param {*} arr 
 * @returns 
 */
function countingSort(arr) {
    if (arr.length === 0) {
        return arr;
    }
    let min = arr[0],
        max = arr[0],
        currIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        min = min > arr[i] ? arr[i] : min;
        max = max < arr[i] ? arr[i] : max;
    }
    let bucket = new Array(max - min + 1).fill(0);
    for (let i = 0; i < arr.length; i++) {
        bucket[arr[i] - min]++
    }
    console.log(bucket)
    for (let i = 0; i < bucket.length; i++) {
        while (bucket[i] > 0) {
            arr[currIndex++] = i + min;
            bucket[i]--
        }
    }

    return arr;
}
/**
 * 桶排序
 * @param {*} arr 
 * @param {*} bucketSize 
 * @returns 
 */
function bucketSort(arr, bucketSize) {
    if (arr.length === 0) {
        return arr;
    }
    var min = arr[0],
        max = arr[0],
        DEFAULT_BUCKET_SIZE = 5,
        bucketSize = bucketSize || DEFAULT_BUCKET_SIZE;
    for (let i = 0; i < arr.length; i++) {
        min = min > arr[i] ? arr[i] : min;
        max = max < arr[i] ? arr[i] : max;
    }
    let bucketCount = Math.floor((max - min) / bucketSize) + 1;
    let buckets = new Array(bucketCount).fill(null).map((e) => {
        e = [];
        return e
    });
    for (let i = 0; i < arr.length; i++) {
        buckets[Math.floor((arr[i] - min) / bucketSize)].push(arr[i]);
    }
    arr.length = 0;
    for (let i = 0; i < buckets.length; i++) {
        insertSort(buckets[i]);
        for (let j = 0; j < buckets[i].length; j++) {
            arr.push(buckets[i][j]);
        }
    }

    return arr;
}
/**
 * 基数排序
 * @param {*} arr 
 * @param {*} max 
 * @returns 
 */
function radixSort(arr) {
    if (arr.length === 0) {
        return arr;
    }
    var max = 0;
    for (let i = 0; i < arr.length; i++) {
        if(max<(arr[i]+"").length){
            max = (arr[i]+"").length;
        }
    }
	const buckets = [];
	let unit = 10,
		base = 1;
	for (let i = 0; i < max; i++, base *= 10, unit *= 10) {
		for (let j = 0; j < arr.length; j++) {
			let index = ~~((arr[j] % unit) / base); 

			if (buckets[index] == null) {
				buckets[index] = []; 
			}
			buckets[index].push(arr[j]); 
		}
		let pos = 0,
			value;
		for (let j = 0, length = buckets.length; j < length; j++) {
			if (buckets[j] != null) {
				while ((value = buckets[j].shift()) != null) {
					arr[pos++] = value; 
				}
			}
		}
	}
	return arr;
};


console.log(radixSort([2, 3, 8, 8, 40000, 302, 5]))