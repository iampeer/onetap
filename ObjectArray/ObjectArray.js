/**
 * @title ObjectArray
 * @version 1.0
 * @description Functions for Objects and Arrays
 * @author peer <peer#0001>
 */

/**
 * 
 * @param {object} obj 
 * @return {array}
*/
function GetObjectKeys(obj)
{
    const arr = [];

    for (var i in obj)
    {
        if (obj.hasOwnProperty(i))
            arr.push(i);
    }

    return arr;
}

/**
 * 
 * @param {object} obj 
 * @return {array}
 */
function GetObjectValues(obj)
{
    const arr = [];

    for (var i in obj)
        arr.push(obj[i]);

    return arr;
}

/**
 * 
 * @param {object} obj 
 * @param {string} val 
 * @return {number}
 */
function GetObjectKeyByValue(obj, val)
{
    for (var i in obj)
    {
        if (obj[i] == val)
            return i;
    }
}

/**
 * 
 * @param {object} obj 
 * @param {number} key 
 * @return {string}
 */
function GetObjectValueByKey(obj, key)
{
    for (var i in obj)
    {
        if (i == key)
            return obj[i];
    }
}

/**
 * 
 * @param {array} arr
 * @return {object} 
 */
function ArrayToObject(arr)
{
    var obj = {};

    for (var i in arr)
    {
        var tempArr = arr[i]
        obj[tempArr[0]] = tempArr[1]
    }

    return obj;
}

/**
 * 
 * @param {object} obj
 * @return {array} 
 */
function ObjectToArray(obj)
{
    var arr = [];

    var objKeys = GetObjectKeys(obj);
    var objValues = GetObjectValues(obj);

    for (var i in obj)
    {
        var curKey = objKeys[i];
        var curValue = objValues[i];

        arr.push([curKey, curValue])
    }

    return arr;
}