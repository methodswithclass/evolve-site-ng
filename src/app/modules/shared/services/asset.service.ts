import { Injectable } from '@angular/core';

import { TrashService } from "../../demos/trash/services/trash.service";
import { FeedbackService } from "../../demos/feedback/services/feedback.service";
import { RecognizeService } from "../../demos/recognize/services/recognize.service";


export var assets = {
	trash:TrashService,
	feedback:FeedbackService,
	recognize:RecognizeService
}

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  constructor() { }
}
