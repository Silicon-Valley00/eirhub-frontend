import json
from flask import request,jsonify,Blueprint
# from werkzeug.security import generate_password_hash, check_password_hash
from Report.ReportModel import Report

reports_route = Blueprint("reports_route",__name__)

@reports_route.route("/reports",methods = ["GET"])
def getReports():
    return 'get Reports'
    