
#coding=UTF-8
import random
import time

url_paths = [
    "class/112.html",
    "class/128.html",
    "class/145.html",
    "class/146.html",
    "class/131.html",
    "class/130.html",
    "class/145.html",
    "learn/821.html",
    "learn/825.html",
    "course/list"
]

http_refers=[
    "http://www.baidu.com/s?wd={query}",
    "https://www.sogou.com/web?query={query}",
    "http://cn.bing.com/search?q={query}",
    "http://search.yahoo.com/search?p={query}",
]

search_keyword = [
    "Spark+Sql",
    "Hadoop",
    "Storm",
    "Spark+Streaming",
    "大数据",
    "面试",
    "Python",
    "Hive",
    "Spring boot",
]

status_codes = ["200","404","500"]

ip_slices = [132,156,132,10,29,145,44,30,21,43,1,7,9,23,55,56,241,134,155,163,172,144,158]

def sample_url():
    return random.sample(url_paths,1)[0]

def sample_ip():
    slice = random.sample(ip_slices,4)
    return ".".join([str(item) for item in slice])

def sample_refer():
    if random.uniform(0,1) > 0.2:
        return "-"
    refer_str = random.sample(http_refers,1)
    query_str = random.sample(search_keyword,1)
    return refer_str[0].format(query=query_str[0])

def sample_status():
    return random.sample(status_codes,1)[0]

def generate_log(count = 10):
    time_str = time.strftime("%Y-%m-%d %H:%M:%S",time.localtime())

    f = open("/home/hadoop/tpdata/project/logs/access.log","w+")
    while count >= 1:
        query_log = "{ip}\t{local_time}\t\"GET /{url} HTTP/1.1\"\t{status}\t{refer}".format(
            local_time=time_str,
            url=sample_url(),
            ip=sample_ip(),
            refer=sample_refer(),
            status=sample_status())
        print(query_log)
        f.write(query_log + "\n")
        count = count - 1

if __name__ == '__main__':
    generate_log(100)